using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class NewFIeldSales : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "YearOfManufacturing",
                table: "Sales",
                nullable: true);

            //migrationBuilder.UpdateData(
            //    table: "AspNetRoles",
            //    keyColumn: "Id",
            //    keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
            //    column: "ConcurrencyStamp",
            //    value: "44c99a84-391c-4301-9ece-d1a03c9a9cd2");

            //migrationBuilder.UpdateData(
            //    table: "AspNetUsers",
            //    keyColumn: "Id",
            //    keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
            //    columns: new[] { "ConcurrencyStamp", "PasswordHash" },
            //    values: new object[] { "7621ed4f-f03d-4f03-8a29-91c79236cb12", "AQAAAAEAACcQAAAAEBAi2EU3MoYGnMshw9Hhh11goE2F6+kBSWk/LGDKdgItvgIv50B2nC5J6F2TF6JuQw==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "YearOfManufacturing",
                table: "Sales");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "f244f52f-b4c5-47e2-bccb-6b974df494d7");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "8590b9d6-33ed-4e84-a3fc-9942726e7fdd", "AQAAAAEAACcQAAAAEI6hO/39RyFewf+Yqc2U9pnWkbgy6n05be7O9YY4N6EACPQDvy/c7lCuZVS2eG+zZA==" });
        }
    }
}
