import { Box, Typography, Stack, Button, useTheme } from "@mui/material";
import { Container } from "../../components/container";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

export default function InitialPage() {
    const { palette } = useTheme();
    const navigate = useNavigate();

    return (
        <Container>
            <Box
                display="flex"
                flexGrow={1}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography fontSize={30} color="white" fontWeight={800}>
                    Atividades Plugadas voltadas ao Pensamento Computacional
                </Typography>

                <Stack mt={1}>
                    <Button
                        onClick={() => navigate("/menu")}
                        variant="contained"
                        sx={{
                            backgroundColor: "#edffe8",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            fontWeight="bold"
                            color={palette.customPrimary}
                        >
                            Menu
                        </Typography>

                        <IoIosArrowForward
                            color={palette.customPrimary}
                            size={18}
                        />
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}
