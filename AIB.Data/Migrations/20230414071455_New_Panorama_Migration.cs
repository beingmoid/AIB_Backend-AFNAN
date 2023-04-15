using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class New_Panorama_Migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ChassisNumber",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CustomerPhoneNumber",
                table: "Sales",
                nullable: true);

            //migrationBuilder.UpdateData(
            //    table: "AspNetRoles",
            //    keyColumn: "Id",
            //    keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
            //    column: "ConcurrencyStamp",
            //    value: "f244f52f-b4c5-47e2-bccb-6b974df494d7");

            //migrationBuilder.UpdateData(
            //    table: "AspNetUsers",
            //    keyColumn: "Id",
            //    keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
            //    columns: new[] { "ConcurrencyStamp", "Email", "FirstName", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "UserName" },
            //    values: new object[] { "8590b9d6-33ed-4e84-a3fc-9942726e7fdd", "sales1@panoramains.com", "sales1@panoramains.com", "sales1@panoramains.com", "sales1@panoramains.com", "AQAAAAEAACcQAAAAEI6hO/39RyFewf+Yqc2U9pnWkbgy6n05be7O9YY4N6EACPQDvy/c7lCuZVS2eG+zZA==", "sales1@panoramains.com" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ChassisNumber",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "CustomerPhoneNumber",
                table: "Sales");

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
    }
}
