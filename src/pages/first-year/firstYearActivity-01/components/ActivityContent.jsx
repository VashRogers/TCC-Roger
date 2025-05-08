import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure9 from "../components/assets/figure9.png";
import figure10 from "../components/assets/figure10.png";

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
                    A atividade tem como foco desenvolver a habilidade, que
                    busca classificar objetos físicos ou digitais com base em
                    características específicas, destacando padrões e diferenças
                    entre eles. A atividade de Reconhecimento de Padrões
                    EF01CO01 - Atividade #019 consiste em um simples jogo, em
                    que o aluno assimila os elementos que se relacionam
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure9}
                    alt="Figura 9"
                    sx={{
                        width: "50%",
                        height: "50%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    A <b>Figura 10 </b>exibe o resultado após o elemento ser
                    assimilado de maneira correta, respeitando o padrão.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure10}
                    alt="Figura 10"
                    sx={{
                        width: "50%",
                        height: "50%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1068100486"
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
            </Stack>
        </Box>
    );
}
