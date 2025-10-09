import { createRoot } from "react-dom/client";
import { MainPage } from "./pages/MainPage.tsx";
import "./shared/styles/reset.css";

createRoot(document.getElementById("root")!).render(<MainPage />);
