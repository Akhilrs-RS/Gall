using System;
using System.ComponentModel.DataAnnotations;

namespace backend
{
    public class CareerSubmission
    {
        [Key]
        public int Id { get; set; }

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
        [MaxLength(255)]
        public string ResumeFileName { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string ResumeContentType { get; set; } = string.Empty;

        [Required]
        public byte[] ResumeData { get; set; } = Array.Empty<byte>();

        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
    }
}
