import React from "react";
import { Container } from "../../../components/container";
import { Box, Typography } from "@mui/material";
import { ContainerForm } from "../../../components/containerForm";
import { Title } from "./components/Title";
import { ActivityContent } from "./components/ActivityContent";

export default function FirstYearActivityOne() {
    return (
        <Container>
            <ContainerForm>
                <Title />

                <ActivityContent />
            </ContainerForm>
        </Container>
    );
}
