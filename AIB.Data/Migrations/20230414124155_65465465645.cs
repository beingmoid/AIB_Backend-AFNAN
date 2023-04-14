using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _65465465645 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "87429db7-681e-49c3-9ab1-cfd78532cad0");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "f49e45b0-09c2-4dc1-b7e9-c72a73201789", "AQAAAAEAACcQAAAAEMdAvFnOo5vR/GWD1DADC782DOb2yUx5U1qDTDRZsiD+88YpWRvkEplyD7Ui/dg7DQ==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "44c99a84-391c-4301-9ece-d1a03c9a9cd2");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "7621ed4f-f03d-4f03-8a29-91c79236cb12", "AQAAAAEAACcQAAAAEBAi2EU3MoYGnMshw9Hhh11goE2F6+kBSWk/LGDKdgItvgIv50B2nC5J6F2TF6JuQw==" });
        }
    }
}
