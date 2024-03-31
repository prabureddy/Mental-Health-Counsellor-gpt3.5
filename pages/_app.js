import "@/styles/globals.css";
import CustomNavbar from "@/components/Navbar";
import "./index.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <CustomNavbar />
      <Component {...pageProps} />
    </main>
  );
}
