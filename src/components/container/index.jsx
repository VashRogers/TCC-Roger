import { Box, useTheme } from "@mui/material";

export function Container({ children }) {
    const { palette } = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                height: "100vh",
                backgroundColor: palette.background.default,
            }}
        >
            {children}
        </Box>
    );
}
