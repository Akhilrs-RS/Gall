using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/contact
        [HttpPost]
        public async Task<IActionResult> SubmitContact([FromBody] ContactSubmission submission)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            submission.SubmittedAt = DateTime.UtcNow;
            _context.ContactSubmissions.Add(submission);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Message submitted successfully!", id = submission.Id });
        }

        // GET: api/contact
        [HttpGet]
        public async Task<IActionResult> GetSubmissions()
        {
            var submissions = await _context.ContactSubmissions
                .OrderByDescending(s => s.SubmittedAt)
                .ToListAsync();

            return Ok(submissions);
        }
    }
}
