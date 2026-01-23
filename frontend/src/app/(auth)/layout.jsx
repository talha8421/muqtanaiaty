import { Poppins } from "next/font/google";
import "../../app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen w-screen bg-lightBlue relative flex  justify-center mx-auto ">
        <img
          src="/blob.png"
          alt=""
          className="absolute top-0 left-0 w-160 h-auto z-0"
        />
        <img
          src="/logo.png"
          alt=""
          className="absolute top-10 left-10 w-40.25 h-auto"
        />
        <div className="z-10">{children}</div>

        <img
          src="/right_decoration.png"
          alt=""
          className="absolute right-0 top-0 h-screen w-auto hidden lg:flex z-0"
        />
      </body>
    </html>
  );
}
