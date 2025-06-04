import React from "react";
import { Container } from "../../../components/container";
import { ContainerForm } from "../../../components/containerForm";
import { Title } from "./components/Title";
import { ActivityContent } from "./components/ActivityContent";

export default function SeventhYearActivityFive() {
    return (
        <Container>
            <ContainerForm>
                <Title />

                <ActivityContent />
            </ContainerForm>
        </Container>
    );
}
