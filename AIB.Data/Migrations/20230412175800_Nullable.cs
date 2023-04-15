using Microsoft.EntityFrameworkCore.Migrations;

namespace AIB.Data.Migrations
{
    public partial class Nullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExtraOtherfields",
                table: "Sales");

            migrationBuilder.AlterColumn<decimal>(
                name: "SaleCommission",
                table: "Sales",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "SaleCommission",
                table: "Sales",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ExtraOtherfields",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: true);

          

           
        }
    }
}
