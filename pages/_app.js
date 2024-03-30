import "@/styles/globals.css";

import "./index.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
