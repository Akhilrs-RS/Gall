using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CareersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CareersController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/careers
        [HttpPost]
        public async Task<IActionResult> SubmitApplication([FromForm] CareerApplicationDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!string.IsNullOrEmpty(dto.Phone) && !System.Text.RegularExpressions.Regex.IsMatch(dto.Phone, @"^\+91 \d{10}$"))
            {
                return BadRequest(new { message = "Phone number must be exactly 10 digits prefixed with +91." });
            }

            if (dto.Resume == null || dto.Resume.Length == 0)
            {
                return BadRequest(new { message = "Resume file is required." });
            }

            // Limit file size to 5MB (5 * 1024 * 1024 bytes)
            if (dto.Resume.Length > 5 * 1024 * 1024)
            {
                return BadRequest(new { message = "File size exceeds the limit of 5MB." });
            }

            // Read file into byte array
            using var memoryStream = new MemoryStream();
            await dto.Resume.CopyToAsync(memoryStream);

            var submission = new CareerSubmission
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Phone = dto.Phone,
                Position = dto.Position,
                Experience = dto.Experience,
                Portfolio = dto.Portfolio,
                Message = dto.Message,
                ResumeFileName = dto.Resume.FileName,
                ResumeContentType = dto.Resume.ContentType,
                ResumeData = memoryStream.ToArray(),
                SubmittedAt = DateTime.UtcNow
            };

            _context.CareerSubmissions.Add(submission);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Application submitted successfully!", id = submission.Id });
        }
    }

    public class CareerApplicationDto
    {
        [Required]
        [MaxLength(200)]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [MaxLength(150)]
        public string Email { get; set; } = string.Empty;

        [Phone]
        [MaxLength(50)]
        public string? Phone { get; set; }

        [Required]
        [MaxLength(100)]
        public string Position { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Experience { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? Portfolio { get; set; }

        public string? Message { get; set; }

        [Required]
        public IFormFile Resume { get; set; } = null!;
    }
}
