import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2", // azul padrão, troque pelo seu
        },
        secondary: {
            main: "#9c27b0", // roxo padrão, troque pelo seu
        },
        background: {
            default: "#0ea800",
            paper: "#ffffff",
        },
        text: {
            primary: "#000000",
            secondary: "#666666",
        },
        customPrimary: "#0ea800",
    },
    typography: {
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
        // outras configs
    },
});
