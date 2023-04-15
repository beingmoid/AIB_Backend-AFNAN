using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class Panorama131202310139 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PolicyIssuer",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Remark",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Sales",
                nullable: false,
                defaultValue: 0);

           
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PolicyIssuer",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Remark",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Sales");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "1e8c3458-bf4f-4bcf-a85b-f955c775743b");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "d31e0ffa-cb4b-407f-82cb-f92f7962e720", "AQAAAAEAACcQAAAAEKoI9CVPzgph0PbX1ksjGJxAlIn8XGTmCytfdJzcEEY1lR6TLSwFhRHgYc/RtLdROQ==" });
        }
    }
}
