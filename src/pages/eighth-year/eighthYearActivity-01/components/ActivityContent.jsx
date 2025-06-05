import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table8 from "./assets/table8.png";

export function ActivityContent() {
    const { isDesktop } = useResponsive("sm");

    return (
        <Box
            p={1}
            display="flex"
            flexDirection="column"
            flexGrow={1}
            alignItems="center"
        >
            <Stack width={isDesktop ? "50%" : null} mt={2}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    A habilidade EF08CO01 visa desenvolver a habilidade de
                    construir soluções de problemas usando a técnica de recursão
                    e automatizar tais soluções usando uma linguagem de
                    programação. A Abstra. EF08CO01 - Atividade #01, utiliza do
                    conceito clássico no ensino de recursão, a sequência de
                    Fibonacci como mostrado na <b>Tabela 8</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table8}
                    alt="Tabela 8"
                    sx={{
                        width: "100%",
                        height: "80%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack width={isDesktop ? "50%" : null} mt={2}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    A atividade para trabalhar a habilidade EF08CO01 ajuda os
                    alunos a entender o conceito de recursão e raciocínio
                    indutivo. Eles veem como um problema maior pode ser
                    resolvido ao resolver subproblemas menores, permitindo a
                    construção de algoritmos que atuam em níveis de abstração
                    mais altos.
                </Typography>
            </Stack>

            {/* <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1075865132"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#1976d2",
                            textDecoration: "underline",
                        }}
                    >
                        Acessar atividade no Scratch
                    </a>
                </Typography>
            </Stack> */}
        </Box>
    );
}
