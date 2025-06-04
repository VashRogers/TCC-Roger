import { Box, Divider, Typography } from "@mui/material";

export function Title() {
    return (
        <>
            <Box p={1}>
                <Typography
                    variant="h4"
                    color="#1b6e00"
                    sx={{
                        fontSize: {
                            xs: "22px",
                            sm: "28px",
                        },
                    }}
                >
                    Algoritmo EF06CO03 e EF06CO05  - Atividade #01
                </Typography>
            </Box>
            <Divider />
        </>
    );
}
