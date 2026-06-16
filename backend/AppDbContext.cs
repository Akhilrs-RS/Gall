using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<ContactSubmission> ContactSubmissions { get; set; } = null!;
        public DbSet<CareerSubmission> CareerSubmissions { get; set; } = null!;
    }
}
