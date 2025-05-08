import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Container({ children }) {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <AppBar
                position="static"
                color="default"
                elevation={1}
                sx={{ backgroundColor: "#1dbe00" }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => navigate(-1)}
                        aria-label="voltar"
                    >
                        <ArrowBackIcon sx={{ color: "#FFFF" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    flexGrow: 1,
                    overflow: "auto",
                    display: "flex",
                    background:
                        "radial-gradient(at 100% 100%, rgb(28, 209, 0),rgb(110, 243, 89) )",
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
