using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class SaleCommission1515555 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "SaleCommission",
                table: "Sales",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "6ef58d47-1dc3-4693-9f46-6917b4531200");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "293ee559-bc7a-4c3e-8b25-5595c90b0973", "AQAAAAEAACcQAAAAEFvH+XMhr8VL5b49uItRqcxqJrn8UYrJ3NdInTfJrNHpIoC1JsuhSdQ6WnRcAM6Sog==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SaleCommission",
                table: "Sales");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "b4432fe3-47d6-4d40-9060-c712b9041307");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "920df439-8796-4326-838a-4babf87a04c5", "AQAAAAEAACcQAAAAEIsudWvVVuW03QeCh6vHUkoKaNwTxy7U+osB+7C+glqTN7vIiWHosP++bK1L0R4A7A==" });
        }
    }
}
