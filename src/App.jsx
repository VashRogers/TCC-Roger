import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { customTheme } from "./theme";
import Router from "./router";
export default function App(){
    return(
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Router/>
        </ThemeProvider>
    )
}