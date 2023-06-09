import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Sidebar classname="dark">
      {" "}
      <Component {...pageProps} classname="dark"/>
    </Sidebar>
  );
}
