// generate-pdf.js
const fs = require("fs-extra");
const puppeteer = require("puppeteer");

async function generatePDF() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load the HTML file
    const reportPath = "./coverage/test-report.html";
    const fileUrl = `file://${process.cwd()}/${reportPath}`;
    await page.goto(fileUrl);

    // Generate PDF
    const pdfPath = "./coverage/test-report.pdf";
    await page.pdf({ path: pdfPath, format: "A4" });

    await browser.close();

    console.log(`PDF generated at: ${pdfPath}`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}

generatePDF();
