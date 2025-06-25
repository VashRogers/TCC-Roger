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

export function StepperModal({ open, handleClose }) {
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
                    width: { xs: "95%", sm: 600, md: 700 },
                    maxHeight: "90vh",
                    bgcolor: "background.paper",
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
                            minWidth: "600px",
                            width: "max-content",
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
                                        "& .MuiStepLabel-label": {
                                            transition: "color 0.2s",
                                        },
                                        "&:hover .MuiStepLabel-label": {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                >
                                    {step.label}
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
                >
                    {steps[activeStep].image && (
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
                    )}

                    <Typography
                        textAlign="center"
                        mb={2}
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
                    }}
                />
            </Box>
        </Modal>
    );
}
