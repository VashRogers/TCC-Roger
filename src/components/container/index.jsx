import { Box, useTheme, AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Container({ children }) {
    const { palette } = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static" color="default" elevation={1}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => navigate(-1)} // volta para a página anterior
                        aria-label="voltar"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

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
        </>
    );
}
