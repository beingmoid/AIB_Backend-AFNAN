using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _123213213213 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ExtraOtherfields",
                table: "Sales",
                nullable: true);

           
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExtraOtherfields",
                table: "Sales");

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
    }
}
