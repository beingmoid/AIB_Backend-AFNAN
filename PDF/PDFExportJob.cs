using iText.Kernel.Geom;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.qrcode;
using System.IO;
using System.Security.Cryptography;


namespace PDF
{
    public class Exporter<T>:IExporter<T>   
    {

        public static string GetPath(string agentName)
        {
            string agentNameText = "agent1"; // replace with actual agent name
            DateTime timestamp = DateTime.UtcNow; // use UTC time to avoid issues with time zones

            string combinedData = $"{agentNameText}-{timestamp.ToString()}";
            byte[] combinedByteCode;

            using (var sha256 = SHA256.Create())
            {
                combinedByteCode = sha256.ComputeHash(Encoding.UTF8.GetBytes(combinedData));
            }

            string fileName = $"{agentName}_{timestamp.ToString("yyyyMMdd_HHmmssfff")}_{BitConverter.ToString(combinedByteCode).Replace("-", "")}.pdf";

            return fileName;
        }
        public async Task<string> GenerateAndExportPDF(Dictionary<string, string> parameters
            , IList<T> data,
            string agentNameText, decimal totalBalanceFigure, string PeriodInWords,


            string headerText = "Agent Account Statement", string GeneratedDate = "")
   
        {

            if (parameters == null)
            {
                throw new ArgumentNullException("column names are not defined.");
            }
            if (data==null)
            {
                throw new ArgumentNullException("Data is not provided");
            }

            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            // Create a new PDF document
            Document document = new Document(iTextSharp.text.PageSize.A4.Rotate());
            var eventHelper = new MyPageEventHandler();
            // Set the event helper to the writerp;

            // Create a PDF writer that writes to a file stream
            PdfWriter writer = PdfWriter.GetInstance(document, new FileStream("output.pdf", FileMode.Create));
            writer.PageEvent = eventHelper;
            // Open the document
            document.Open();

            // Set up the fonts
            BaseFont headerFont = BaseFont.CreateFont();
            BaseFont cellFont = BaseFont.CreateFont(@"https://sqaurex.com/files/Font/static/LexendDeca-SemiBold.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
            // Add the heading to the PDF document
            Paragraph heading = new Paragraph(headerText, new Font(cellFont, 24, Font.BOLD));
            heading.Alignment = Element.ALIGN_CENTER;
            document.Add(heading);

            // Add the subheading to the PDF document
            Paragraph subheading = new Paragraph(GeneratedDate, new Font(cellFont, 12));
            subheading.Alignment = Element.ALIGN_CENTER;
            document.Add(subheading);

            // Add some space after the heading

            document.Add(new Paragraph("\n\n\n"));

            // Create a table to hold the logo and agent information
            PdfPTable outerTable = new PdfPTable(2);
            outerTable.WidthPercentage = 100;
            outerTable.SetWidths(new float[] { 0.8f, 0.2f });

            // Create a nested table to hold the agent information
            PdfPTable agentTable = new PdfPTable(1);
            agentTable.WidthPercentage = 100;

            // Add the agent information to the nested table
            Chunk agentName = new Chunk("Agent Name :"+agentNameText, new Font(cellFont, 12));
            Chunk totalBalance = new Chunk("Total Balance : AED "+totalBalanceFigure.ToString(), new Font(cellFont, 12));
            Chunk period = new Chunk("Period : "+PeriodInWords, new Font(cellFont, 12));
            Paragraph agentInfo = new Paragraph();
            agentInfo.Add(agentName);
            agentInfo.Add(new Chunk("\n"));
            agentInfo.Add(totalBalance);
            agentInfo.Add(new Chunk("\n"));
            agentInfo.Add(period);
            PdfPCell agentCell = new PdfPCell(agentInfo);
            agentCell.Border = PdfPCell.NO_BORDER;
            agentCell.HorizontalAlignment = Element.ALIGN_LEFT;
            agentTable.AddCell(agentCell);
            // Add the nested table with the agent information to the outer table
            PdfPCell agentTableContainer = new PdfPCell(agentTable);
            agentTableContainer.Border = PdfPCell.NO_BORDER;
            agentTableContainer.HorizontalAlignment = Element.ALIGN_LEFT;
            outerTable.AddCell(agentTableContainer);
            string logoPath = @"https://sqaurex.com/files/logo.png";
            Image logo = Image.GetInstance(logoPath);
            logo.ScaleToFit(100, 100);
            PdfPCell logoCell = new PdfPCell(logo);
            logoCell.Border = PdfPCell.NO_BORDER;
            logoCell.HorizontalAlignment = Element.ALIGN_RIGHT;
            outerTable.AddCell(logoCell);
            document.Add(new Paragraph("\n\n"));
            // Close the document and writer
            document.Close();
            writer.Close();

            Console.WriteLine("PDF created successfully!");
            return "";
        } 
    }
    public interface IExporter<T> {
        //Task<string> GenerateAndExportPDF(Dictionary<string,string> parameters, IList<T> data,
        //    string agentName,decimal totalBalance, string PeriodInWords,
            
        //    string headerText= "Agent Account Statement",string GeneratedDate="");
    }
    public class MyPageEventHandler : PdfPageEventHelper
    {




        public override void OnEndPage(PdfWriter writer, Document document)
        {
            PdfContentByte cb = writer.DirectContent;

            // Set the font and font size
            BaseFont font = BaseFont.CreateFont(BaseFont.HELVETICA_BOLD, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            cb.SetFontAndSize(font, 9f);
            // Add some padding to the top of the footer
            float padding = 1f;
            float x = document.LeftMargin;
            float y = document.PageSize.Height / 18 - document.TopMargin - padding;

            // Set the background color
            cb.SetRGBColorFill(226, 226, 226);

            // Draw the rectangle for the background color
            cb.Rectangle(document.PageSize.Height / 18, y - 3, document.PageSize.Width, 12);
            cb.Fill();

            // Set the text color to black
            cb.SetRGBColorFill(0, 0, 0);

            // Add the text to the center of the footer
            cb.BeginText();
            cb.ShowTextAligned(Element.ALIGN_CENTER, "Are you tired of managing your insurance business manually? Contact us now at +923400064394.", document.PageSize.Width / 2, y, 0);
            cb.EndText();

        }

    }
}
