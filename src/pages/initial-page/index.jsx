import { Box, Typography, Stack, Button, useTheme } from "@mui/material";
import { Container } from "../../components/container";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";
import { FaRegQuestionCircle } from "react-icons/fa";
import { StepperModal } from "./components/StepperModal";
import { useState } from "react";

export default function InitialPage() {
    const { palette } = useTheme();
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => {
        setOpenModal(false);
    };

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

                <Stack mt={1}>
                    <Button
                        onClick={() => {
                            setOpenModal(true);
                        }}
                        variant="contained"
                        sx={{
                            backgroundColor: "#edffe8",
                            alignItems: "center",
                        }}
                    >
                        <FaRegQuestionCircle
                            color={palette.customPrimary}
                            size={18}
                            style={{ marginRight: 2 }}
                        />
                        <Typography
                            fontWeight="bold"
                            color={palette.customPrimary}
                        >
                            Saiba Mais
                        </Typography>
                    </Button>
                </Stack>
            </Box>
            <StepperModal open={openModal} handleClose={handleClose} />
        </Container>
    );
}
