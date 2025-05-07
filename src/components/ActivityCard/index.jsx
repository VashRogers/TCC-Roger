import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    useTheme,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router";

export function ActivityCard({ headerTitle, title, description, link }) {
    const navigate = useNavigate();
    const { palette } = useTheme();

    return (
        <Card
            sx={{
                width: 250,
                height: 220,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardContent
                sx={{
                    flex: "1 1 auto",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                >
                    {headerTitle}
                </Typography>

                <Typography variant="h5" component="div" fontSize={18}>
                    {title}
                </Typography>

                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        pr: 1,
                        mt: 1,
                        scrollbarWidth: "none", // Firefox
                        "&::-webkit-scrollbar": {
                            display: "none", // Chrome, Safari
                        },
                    }}
                >
                    <Typography variant="body2" fontSize={12}>
                        {description}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions sx={{ mt: "auto" }}>
                <Button
                    size="small"
                    onClick={() => navigate(link)}
                    variant="outlined"
                    sx={{
                        color: palette.customPrimary,
                        borderColor: palette.customPrimary,
                        "&:hover": {
                            borderColor: palette.customPrimary,
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <Typography color={palette.customPrimary} fontSize={12}>
                        ver mais
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}
