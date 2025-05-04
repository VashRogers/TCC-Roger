import { Box, Grid, Stack } from "@mui/material";
import { Container } from "../../components/container";
import { ActivityCardsItem } from "./components/ActivityCardsItem";
import { ActivityCard } from "../../components/ActivityCard";

export default function SecondYear() {
    return (
        <Container>
            <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
                display="flex"
                flexGrow={1}
                padding={1}
            >
                {ActivityCardsItem.map((item, index) => (
                    <Grid key={index}>
                        <ActivityCard
                            title={item.title}
                            headerTitle={item.headerTitle}
                            description={item.description}
                            link={item.link}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
