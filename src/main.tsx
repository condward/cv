import ReactDOM from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";
import { App } from "./App";

export const Main = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <App />
  </PDFViewer>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Main />);
