import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Router from "./router";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);
