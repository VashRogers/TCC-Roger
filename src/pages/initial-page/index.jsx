import { Box, Typography } from "@mui/material";

export default function InitialPage() {
    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography fontSize={25}>
                Atividades Plugadas voltadas ao Pensamento Computacional
            </Typography>
        </Box>
    );
}
