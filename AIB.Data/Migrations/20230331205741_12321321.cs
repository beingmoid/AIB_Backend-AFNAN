using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _12321321 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "bae3f12d-c297-4843-a1e9-c080f5a0d544");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "Email", "FirstName", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "UserName" },
                values: new object[] { "8d678df6-25eb-4a22-8c22-ef53505de078", "sales1@panoramains.com", "sales1@panoramains.com", "sales1@panoramains.com", "sales1@panoramains.com", "AQAAAAEAACcQAAAAEIoVaAyQ5kgcuJstJWmT7wDlDjuOJN7Xu4diqysSs3xc4p7i0tky/oNPk8kQqBryRA==", "sales1@panoramains.com" });
        }
    }
}
