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
                justifyContent: "space-between",
            }}
        >
            <CardContent>
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
                        maxHeight: 100,
                        overflowY: "auto",
                        pr: 1,
                    }}
                >
                    <Typography variant="body2" fontSize={12}>
                        {description}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions>
                <Button
                    size="small"
                    onClick={() => navigate(link)}
                    variant="outlined"
                    sx={{
                        color: palette.background.default,
                        borderColor: palette.background.default,
                        "&:hover": {
                            borderColor: palette.background.default,
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <Typography
                        color={palette.background.default}
                        fontSize={12}
                    >
                        ver mais
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}
