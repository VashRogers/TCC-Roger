import React from "react";
import { Box } from "@mui/material";

export function ContainerForm({ children }) {
    return (
        <Box
            p={{
                xs: 1,
                sm: "0px 10px 10px 10px",
                md: "5px 10px 10px 10px",
            }}
            width="91%"
            sx={{
                margin: "0 auto",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#d6ffc6",
                marginBottom: "2rem",
                minHeight: "380px",
                marginTop: 5,
                overflowY: "auto",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                    display: "none", // Chrome, Safari
                },
            }}
        >
            {children}
        </Box>
    );
}
