import { browser } from "hatchable";

export const access = "public";
export const methods = ["GET"];

export default async function (req, res) {
  const pdf = await browser.pdf("https://manoj-personal.hatchable.site/resume.html");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=Manoj_M_Resume.pdf");
  res.send(pdf);
}
