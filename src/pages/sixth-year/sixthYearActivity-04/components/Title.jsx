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
                    Decomposição de Problema EF06CO04 e EF06CO06 - Atividade #01
                </Typography>
            </Box>
            <Divider />
        </>
    );
}
