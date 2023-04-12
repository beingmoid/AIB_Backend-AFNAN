using AIB.Api.Controllers;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using static iTextSharp.text.pdf.AcroFields;

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
        float y = document.PageSize.Height / 15 - document.TopMargin - padding;

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
public class PdfConverter
{ 
    
    
    
    public void CreatePdfWithHeaderAndFooter(
  
   
     List<StatementDTO> dataList,
     string[] columnNames,
     string path,
       string agentNameText = "",
     string agentTotalBalance = "",
     string periodDate = "")
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        // Create a new PDF document
        Document document = new Document(PageSize.A4.Rotate());
        var eventHelper = new MyPageEventHandler();

        // Set the event helper to the writerp;

        // Create a PDF writer that writes to a file stream
        PdfWriter writer = PdfWriter.GetInstance(document, new FileStream(path, FileMode.Create));
        writer.PageEvent = eventHelper;
        // Open the document
        document.Open();

        // Set up the fonts
        BaseFont headerFont = BaseFont.CreateFont(@"https://sqaurex.com/files/Poppins/Poppins-Bold.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED); ;
        BaseFont cellFont = BaseFont.CreateFont(@"https://sqaurex.com/files/Poppins/Poppins-Medium.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
        // Add the heading to the PDF document
        Paragraph heading = new Paragraph("Agent Account Statement", new Font(cellFont, 24, Font.BOLD));
        heading.Alignment = Element.ALIGN_CENTER;
        document.Add(heading);

        // Add the subheading to the PDF document
        Paragraph subheading = new Paragraph($"Generated at{ DateTime.Now.ToShortDateString() } ", new Font(cellFont, 12));
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
        Chunk agentName = new Chunk($"Agent Name : {agentNameText}", new Font(cellFont, 12));
        Chunk totalBalance = new Chunk($"Total Balance : AED {agentTotalBalance}", new Font(cellFont, 12));
        Chunk period = new Chunk($"Period : {periodDate}", new Font(cellFont, 12));
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

        // Create a cell for the logo
        string logoPath = @"https://sqaurex.com/files/logo.png";
        Image logo = Image.GetInstance(logoPath);
        logo.ScaleToFit(100, 100);
        PdfPCell logoCell = new PdfPCell(logo);
        logoCell.Border = PdfPCell.NO_BORDER;
        logoCell.HorizontalAlignment = Element.ALIGN_RIGHT;
        outerTable.AddCell(logoCell);

        // Add the outer table to the document
        document.Add(outerTable);
        // Add some space after the heading

        document.Add(new Paragraph("\n\n"));
        // Create the table
        PdfPTable table = new PdfPTable(10);
        table.WidthPercentage = 100;
        table.SetWidths(new float[] { 2.5f, 6.5f, 6.5f,1.8f, 3.5f,5.5f,3.5f, 2.5f, 2.5f, 2.5f });
        //Date,Policy,Customer,PolicyType,Make&Model,InsuredBy,Ref#,Debit,Credit,Balance

        // Create the header row


        PdfPCell cell = new PdfPCell(new Phrase("Date", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

        cell = new PdfPCell(new Phrase("Policy#", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

        cell = new PdfPCell(new Phrase("Customer", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);
        cell = new PdfPCell(new Phrase("Type", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

        cell = new PdfPCell(new Phrase("Make & Model", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

      
        cell = new PdfPCell(new Phrase("Insured By", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

        cell = new PdfPCell(new Phrase("Reference#", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

    

        cell = new PdfPCell(new Phrase("Debit", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

        cell = new PdfPCell(new Phrase("Credit", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);
        cell = new PdfPCell(new Phrase("Balance", new Font(headerFont, 10, Font.NORMAL, BaseColor.WHITE)));
        cell.BackgroundColor = new BaseColor(31, 53, 99);
        cell.HorizontalAlignment = Element.ALIGN_CENTER;
        table.AddCell(cell);

        // Add the data rows
        foreach (var item in dataList)
        {

            cell = new PdfPCell(new Phrase(item.Date.ToShortDateString(), new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);
            cell = new PdfPCell(new Phrase(item.PolicyNumber, new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);



            cell = new PdfPCell(new Phrase(item.CustomerName, new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);

            cell = new PdfPCell(new Phrase(item.MotorType, new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);


            cell = new PdfPCell(new Phrase(item.VehileType, new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);


            cell = new PdfPCell(new Phrase(item.CompanyName, new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);

            cell = new PdfPCell(new Phrase(item.ReferenceNumber, new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);




            cell = new PdfPCell(new Phrase(item.Debit == 0 ? "" : item.Debit.ToString(), new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);
            cell = new PdfPCell(new Phrase(item.Credit == 0 ? "" : item.Credit.ToString(), new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);
            cell = new PdfPCell(new Phrase(item.Balance.ToString(), new Font(cellFont, 10, Font.NORMAL, BaseColor.BLACK)));
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            table.AddCell(cell);
        }


        // Create the balance row
        PdfPCell balanceCell = new PdfPCell(new Phrase($"BALANCE : AED {dataList.LastOrDefault().Balance}",
         new Font(headerFont, 10, Font.NORMAL, BaseColor.BLACK))
     );
        balanceCell.Colspan = 11; // change the colspan to 11
        balanceCell.HorizontalAlignment = Element.ALIGN_RIGHT;
        balanceCell.Border = 0;
        table.AddCell(balanceCell);
        // Add the table to the document
        document.Add(table);
        PdfContentByte cb = writer.DirectContent;





        // Close the document and writer
        document.Close();
        writer.Close();

        Console.WriteLine("PDF created successfully!");
    }
 //public void CreatePdfWithHeaderAndFooter<T>(
 //    string headerHtml,
 //    string footerHtml,
 //    List<T> dataList,
 //    List<string> columnNames,
 //    string path)
 //{
 //    // create a new PDF document
 //    Document doc = new Document(new Rectangle(842f * 1.5f, 595f), 50, 50, 60, 60);

    //    // create a new FileStream to write to the PDF file
    //    using (FileStream stream = new FileStream(path, FileMode.Create))
    //    {
    //        // create a new PdfWriter to write to the FileStream
    //        PdfWriter writer = PdfWriter.GetInstance(doc, stream);

    //        doc.Open();
    //        // create a new PdfContentByte object to write to the PDF document
    //        PdfContentByte cb = writer.DirectContent;

    //        // create a new PdfPTable to hold the table data
    //        PdfPTable table = new PdfPTable(columnNames.Count);

    //        // set the default font for the PDF document
    //        BaseFont bf = BaseFont.CreateFont(BaseFont.HELVETICA, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
    //        Font font = new Font(bf, 7, Font.NORMAL);
    //        // set the column widths for the table
    //        float[] columnWidths = new float[columnNames.Count];
    //        for (int i = 0; i < columnNames.Count; i++)
    //        {
    //            columnWidths[i] = 100f / columnNames.Count;
    //        }
    //        table.SetWidths(columnWidths);
    //        // add the column names to the table
    //        foreach (string columnName in columnNames)
    //        {
    //            PdfPCell cell = new PdfPCell(new Phrase(columnName, font));
    //            cell.BackgroundColor = new BaseColor(220, 220, 220);
    //            cell.HorizontalAlignment = PdfPCell.ALIGN_CENTER;
    //            cell.Border = Rectangle.BOTTOM_BORDER;
    //            table.AddCell(cell);
    //        }

    //        // add the data to the table
    //        foreach (T data in dataList)
    //        {
    //            foreach (string columnName in columnNames)
    //            {
    //                object columnValue = null;
    //                if (data != null)
    //                {
    //                    var propertyInfo = typeof(T).GetProperty(columnName);
    //                    if (propertyInfo != null)
    //                    {
    //                        columnValue = propertyInfo.GetValue(data);
    //                    }
    //                }
    //                string value = columnValue?.ToString() ?? "";
    //                if (columnValue is DateTime dateTimeValue)
    //                {
    //                    if (dateTimeValue == DateTime.MinValue)
    //                    {
    //                        value = ""; // show nothing
    //                    }
    //                    else
    //                    {
    //                        value = dateTimeValue.ToString("MM/dd/yyyy"); // format date string
    //                    }
    //                }
    //                PdfPCell cell = new PdfPCell(new Phrase(value, font));
    //                cell.HorizontalAlignment = PdfPCell.ALIGN_CENTER;
    //                cell.Border = Rectangle.BOTTOM_BORDER;
    //                table.AddCell(cell);
    //            }
    //        }

    //        // create a new PdfPTable to hold the header content
    //        PdfPTable headerTable = new PdfPTable(1);
    //        headerTable.DefaultCell.Border = Rectangle.NO_BORDER;
    //        // set the width of the header table to the full page width minus the left and right margins
    //        headerTable.TotalWidth = doc.PageSize.Width - doc.LeftMargin - doc.RightMargin;

    //        PdfPCell headerCell = new PdfPCell(new Phrase(headerHtml, new Font(bf, 10, Font.NORMAL)));
    //        headerCell.HorizontalAlignment = PdfPCell.ALIGN_CENTER;
    //        //headerCell.Border = Rectangle.BOTTOM_BORDER;
    //        //headerCell.PaddingBottom = 5;
    //        headerTable.AddCell(headerCell);

    //        //// create a new PdfPTable to hold the footer content
    //        //PdfPTable footerTable = new PdfPTable(1);
    //        //footerTable.DefaultCell.Border = Rectangle.NO_BORDER;
    //        //// set the width of the footer table to the full page width minus the left and right margins
    //        //footerTable.TotalWidth = doc.PageSize.Width - doc.LeftMargin - doc.RightMargin;
    //        //PdfPCell footerCell = new PdfPCell(new Phrase(footerHtml, font));
    //        //footerCell.HorizontalAlignment = PdfPCell.ALIGN_CENTER;
    //        //footerCell.Border = Rectangle.TOP_BORDER;
    //        //footerCell.PaddingTop = 5;
    //        //footerTable.AddCell(footerCell);

    //        //// create a new FooterEventHandler object for the footer content
    //        //FooterEventHandler footer = new FooterEventHandler(footerTable);
    //        //writer.PageEvent = footer;

    //        // create a new HeaderEventHandler object for the header content
    //        HeaderEventHandler header = new HeaderEventHandler(headerTable);
    //        writer.PageEvent = header;



    //        // add the table to the PDF document
    //        doc.Add(table);

    //        stream.Flush();
    //        // close the PDF document and dispose of the resources
    //        doc.Close();

    //        writer.Close();
    //        stream.Close();
    //    }
    //}
}
public class HeaderEventHandler : PdfPageEventHelper
{
    private PdfPTable _headerTable;

    public HeaderEventHandler(PdfPTable headerTable)
    {
        _headerTable = headerTable;
    }

    public override void OnEndPage(PdfWriter writer, Document document)
    {
        base.OnEndPage(writer, document);

        // set the position of the header table
        _headerTable.TotalWidth = document.PageSize.Width - document.LeftMargin - document.RightMargin;
        _headerTable.WriteSelectedRows(0, -1, document.LeftMargin, document.PageSize.GetTop(document.TopMargin) - _headerTable.TotalHeight+40 , writer.DirectContent);
    }
}

public class FooterEventHandler : PdfPageEventHelper
{
    private PdfPTable _footerTable;

    public FooterEventHandler(PdfPTable footerTable)
    {
        _footerTable = footerTable;
    }

    public override void OnEndPage(PdfWriter writer, Document document)
    {
        base.OnEndPage(writer, document);

        // set the position of the footer table
        _footerTable.TotalWidth = document.PageSize.Width - document.LeftMargin - document.RightMargin;
        _footerTable.WriteSelectedRows(0, -1, document.LeftMargin, document.BottomMargin, writer.DirectContent);
    }

    public override void OnCloseDocument(PdfWriter writer, Document document)
    {
        base.OnCloseDocument(writer, document);

        // add the total page count to the footer table
        int pageCount = writer.PageNumber - 1;
        _footerTable.WriteSelectedRows(0, -1, document.LeftMargin, document.BottomMargin, writer.DirectContent);
        PdfPCell cell = new PdfPCell(new Phrase($"Page {pageCount}", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL)));
        cell.HorizontalAlignment = PdfPCell.ALIGN_CENTER;
        cell.Border = Rectangle.NO_BORDER;
        _footerTable.AddCell(cell);
    }


}

public static class ObjectExtensions
{
    public static object GetPropertyValue(this object obj, string propertyName)
    {
        PropertyInfo[] propertyInfos = obj.GetType().GetProperties();

        foreach (PropertyInfo propertyInfo in propertyInfos)
        {
            if (propertyInfo.CanRead && propertyInfo.Name.Contains(propertyName))
            {
                return propertyInfo.GetValue(obj)==null?"" : propertyInfo.GetValue(obj);
            }
        }

        return null;
    }
}
