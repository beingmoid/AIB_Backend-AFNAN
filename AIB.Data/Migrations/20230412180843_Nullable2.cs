using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class Nullable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "065b8500-2dcb-456e-b60e-293aad62e05c");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "Email", "FirstName", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "UserName" },
                values: new object[] { "c149f971-b261-4a17-8a40-3a1f9624d565", "rashidt24@gmail.com", "rashidt24@gmail.com", "rashidt24@gmail.com", "rashidt24@gmail.com", "AQAAAAEAACcQAAAAEFBPYjjPcCqBn2JdnhsoolcWf2LF5CC9atS8uVhGzNjmBgQ570kYcwt/AWEfqg0erw==", "rashidt24@gmail.com" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "5a4d479d-4ffb-4a16-b855-e2b2896def1c");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "Email", "FirstName", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "UserName" },
                values: new object[] { "a09f6ef2-a76f-4384-9cc9-f503aa090aac", "sales1@panoramains.com", "sales1@panoramains.com", "sales1@panoramains.com", "sales1@panoramains.com", "AQAAAAEAACcQAAAAEFql2FT85B9reLw3zOa24x5m/VMIPrdh95bkEQohcTMX06Vsst1QFVfaFOrvDeKQHA==", "sales1@panoramains.com" });
        }
    }
}
