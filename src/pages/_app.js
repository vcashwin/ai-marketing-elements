import "@/styles/globals.css";
import localFont from "next/font/local";

const grifter = localFont({
  src: "../assets/grifterbold.otf",
  variable: "--font-grifter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={grifter.variable}>
      <Component {...pageProps} />
    </div>
  );
}
