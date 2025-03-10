﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class _123 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "c92d31d7-8420-4289-b117-ff383e341a4a");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "945768f1-8ede-4063-9607-9a57baf4f821", "AQAAAAEAACcQAAAAEDMdAe/LfCKt353ptcyhW67NZKxcULRmpmDZxjXC0hOuKDmE6BWWsfS1/sCaciE/oA==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "d1859807-fba1-4915-ad3e-4b09e084b7a0");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "1f812c81-20f8-4746-981d-8a95be10fb60", "AQAAAAEAACcQAAAAEH9w1QPUPrIi6r8P1V0Zm3i9qIzEhWpqRvi+Yd4+E135LQ6t3dYgSqBKVeRlzVVAZQ==" });
        }
    }
}
