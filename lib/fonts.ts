import { Lato, Quicksand } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font--lato",
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font--quicksand",
});

export { quicksand, lato };
