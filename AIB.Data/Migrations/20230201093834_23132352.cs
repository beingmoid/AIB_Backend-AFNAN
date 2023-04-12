using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _23132352 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "5be84cb6-685b-452b-8003-e1e51c4f29bf");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a6901d59-1d7c-44d8-bb24-7cb8eab32387", "AQAAAAEAACcQAAAAEBgDrN7t8meoB7mZM9DONOPORwyOrjolVlBdjBaZb0D+s3qhL7JCifHm0PJqHgF0bg==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "771a4f94-f230-4d53-b95d-360b8e657a6b");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "26540cd5-91ac-48dd-b489-7336be86cb73", "AQAAAAEAACcQAAAAEEsL7FvxLwdgn9fR7zprTFMknT1iwzWIQpilnyTfZgAbShGpl+RtIvmrKhIwkrx52A==" });
        }
    }
}
