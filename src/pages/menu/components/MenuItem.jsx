import { Button, Typography, useTheme } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

export function MenuItem({ title, link }) {
    const { palette } = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <Button
                onClick={() => navigate(link)}
                sx={{
                    backgroundColor: "#edffe8",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingY: 1.5,
                    paddingX: 2,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                        backgroundColor: "#d6f5c9", // cor mais escura no hover
                    },
                }}
            >
                <Typography
                    fontWeight="bold"
                    color={palette.background.default}
                >
                    {title}
                </Typography>

                <IoIosArrowForward
                    color={palette.background.default}
                    size={18}
                />
            </Button>
        </>
    );
}
