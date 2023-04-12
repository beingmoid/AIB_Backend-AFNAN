using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _12321321 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
