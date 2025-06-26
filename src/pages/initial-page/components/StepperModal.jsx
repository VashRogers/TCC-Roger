import React, { useState, useRef, useEffect } from "react";
import {
    Box,
    Button,
    MobileStepper,
    Modal,
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
    useTheme,
} from "@mui/material";
import { steps } from "./steps";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export function StepperModal({ open, setOpenModal }) {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = steps.length;
    const theme = useTheme();

    const stepperRef = useRef([]);

    const handleNext = () => {
        setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    };

    const handleClose = () => {
        setActiveStep(0);
        setOpenModal(false);
    };

    useEffect(() => {
        const currentStep = stepperRef.current[activeStep];
        if (currentStep) {
            currentStep.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [activeStep]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: { xs: "95%", sm: 600, md: 900 },
                    height: { xs: "90vh", sm: "90vh", md: "60vh" },
                    background:
                        "radial-gradient(at 100% 100%, rgb(235, 250, 227),rgb(235, 252, 232) )",
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h6"
                    mb={2}
                    fontWeight="bold"
                    textAlign="center"
                >
                    Como funciona o sistema?
                </Typography>

                <Box
                    sx={{
                        overflowX: "auto",
                        mb: 2,
                        scrollbarWidth: "none", // Firefox
                        "&::-webkit-scrollbar": {
                            display: "none", // Chrome, Edge e Safari
                        },
                    }}
                >
                    <Stepper
                        activeStep={activeStep}
                        alternativeLabel
                        sx={{
                            minWidth: { xs: "100%", sm: "600px" },
                            width: "max-content",

                            // Cor da linha ativa (opcional)
                            "& .MuiStepConnector-line": {
                                borderColor: theme.palette.customPrimary,
                            },

                            // Ícone do step ativo
                            "& .MuiStepIcon-root.Mui-active": {
                                color: theme.palette.customPrimary,
                            },

                            // Ícone do step completado (se quiser também mudar)
                            "& .MuiStepIcon-root.Mui-completed": {
                                color: theme.palette.customPrimary,
                            },

                            // Label do step ativo
                            "& .MuiStepLabel-label.Mui-active": {
                                color: theme.palette.customPrimary,
                            },

                            // Label do step concluído (opcional)
                            "& .MuiStepLabel-label.Mui-completed": {
                                color: theme.palette.customPrimary,
                            },
                        }}
                    >
                        {steps.map((step, index) => (
                            <Step
                                key={step.label}
                                ref={(el) => (stepperRef.current[index] = el)}
                            >
                                <StepLabel
                                    onClick={() => setActiveStep(index)}
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover .MuiStepLabel-label": {
                                            color: theme.palette.primary.main, // hover (opcional)
                                        },
                                    }}
                                >
                                    <Typography fontWeight={600} fontSize={14}>
                                        {step.label}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Box
                    flexGrow={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    overflow="auto"
                    sx={{ height: { xs: "50vh", sm: "50vh", md: "20vh" } }}
                >
                    {/* {steps[activeStep].image && (
                        <Paper
                            elevation={3}
                            sx={{
                                height: 200,
                                width: "100%",
                                mb: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                borderRadius: 2,
                            }}
                        >
                            <img
                                src={steps[activeStep].image}
                                alt={steps[activeStep].label}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Paper>
                    )} */}

                    <Typography
                        textAlign="center"
                        mb={1}
                        sx={{ whiteSpace: "pre-line" }}
                    >
                        {steps[activeStep].description}
                    </Typography>
                </Box>

                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            variant="outlined"
                            sx={{
                                color: theme.palette.customPrimary,
                                borderColor: theme.palette.customPrimary,
                                "&:hover": {
                                    borderColor: theme.palette.customPrimary,
                                    backgroundColor: "transparent",
                                },
                            }}
                            onClick={
                                activeStep === maxSteps - 1
                                    ? handleClose
                                    : handleNext
                            }
                        >
                            {activeStep === maxSteps - 1 ? "Fechar" : "Próximo"}
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                            variant="outlined"
                            sx={{
                                color: theme.palette.customPrimary,
                                borderColor: theme.palette.customPrimary,
                                "&:hover": {
                                    borderColor: theme.palette.customPrimary,
                                    backgroundColor: "transparent",
                                },
                            }}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Voltar
                        </Button>
                    }
                    sx={{
                        mt: 2,
                        justifyContent: "space-between",
                        background:
                            "radial-gradient(at 100% 100%, rgb(235, 250, 227),rgb(235, 252, 232) )",
                        borderRadius: 1,
                        p: 1,
                    }}
                />
            </Box>
        </Modal>
    );
}
