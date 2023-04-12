using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _546465 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "faf9af4c-747e-4a38-91e3-125a289f8c7f");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "Email", "FirstName", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "UserName" },
                values: new object[] { "d22f5bcc-52bb-4a86-bac3-0f665ac981d7", "scb_admin@sabaharains.com", "scb_admin@sabaharains.com", "scb_admin@sabaharains.com", "scb_admin@sabaharains.com", "AQAAAAEAACcQAAAAEEsgot2ZCBJ7VAKekyKQjApTqLqGJYJRFOi/N62W9ZfCbXUCMCleNcDvNMMav03N7A==", "scb_admin@sabaharains.com" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "41e225d7-1c24-4192-a317-26932c0d62d7");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "Email", "FirstName", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "UserName" },
                values: new object[] { "c4194e1d-ab5f-45cd-9408-fc15ad0e091a", "rashidt24@gmail.com", "rashidt24@gmail.com", "rashidt24@gmail.com", "rashidt24@gmail.com", "AQAAAAEAACcQAAAAECsM65KmzpUUpggTPgQF3POKrLcxqfoKE7m9vkINwQZ2enAMAnjYZSghwREHY2B5zA==", "rashidt24@gmail.com" });
        }
    }
}
