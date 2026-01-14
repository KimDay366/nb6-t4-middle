// import puppeteer from "puppeteer";

// const main = async () => {
//   const browser = await puppeteer.launch({
//     args: ["--no-sandbox", "--disable-setuid-sandbox"],
//   });
//   const page = await browser.newPage();
//   await page.goto("https://nd6-team4-moonshot.netlify.app/", {
//     waitUntil: "networkidle2",
//   });
//   await page.pdf({ path: "test.pdf", format: "A4" });
//   await browser.close();
// };

// main();

// import puppeteer from "puppeteer-core";

// const main = async () => {
//   const browser = await puppeteer.launch({
//     executablePath: "/snap/bin/chromium",
//     args: ["--no-sandbox", "--disable-setuid-sandbox"],
//   });

//   const page = await browser.newPage();
//   await page.goto("https://nd6-team4-moonshot.netlify.app/", {
//     waitUntil: "networkidle2",
//   });
//   await page.pdf({ path: "test.pdf", format: "A4" });
//   await browser.close();
// };

// main();
