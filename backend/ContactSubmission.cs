using System;
using System.ComponentModel.DataAnnotations;

namespace backend
{
    public class ContactSubmission
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string FullName { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? Company { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(150)]
        public string Email { get; set; } = string.Empty;

        [Phone]
        [MaxLength(50)]
        public string? Phone { get; set; }

        [MaxLength(100)]
        public string? ServiceOfInterest { get; set; }

        [Required]
        public string Message { get; set; } = string.Empty;

        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
    }
}
