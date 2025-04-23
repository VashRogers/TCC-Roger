import { Box, Stack } from "@mui/material";
import { Container } from "../../components/container";
import { menuItems } from "./components/menuItems";
import { MenuItem } from "./components/MenuItem";

export default function Menu() {
    return (
        <Container>
            <Box
                display="flex"
                flexGrow={1}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                {menuItems.map((item, index) => (
                    <Stack key={index} my={1}>
                        <MenuItem title={item.title} link={item.link} />
                    </Stack>
                ))}
            </Box>
        </Container>
    );
}
