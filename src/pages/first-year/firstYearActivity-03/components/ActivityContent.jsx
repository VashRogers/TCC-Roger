import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure13 from "../components/assets/figure13.png";
import figure14 from "../components/assets/figure14.png";
import figure15 from "../components/assets/figure15.png";
import figure16 from "../components/assets/figure16.png";
import figure17 from "../components/assets/figure17.png";

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
                    A última atividade referente ao primeiro ano do ensino
                    fundamental EF01CO03, que busca criar e organizar sequências
                    de passos em formatos físicos ou digitais, associando essas
                    sequências a "Algoritmos", foi desenvolvida com base em uma
                    música referenciada no site BNCC, mostrada na{" "}
                    <b>Figura 13</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure13}
                    alt="Figura 13"
                    sx={{
                        width: "80%",
                        height: "50%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack width={isDesktop ? "50%" : null} mt={2}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    A atividade Algoritmo EF01CO03 - Atividade #01 , um jogo
                    baseado no algoritmo “cabeça, ombro, joelho e pé”, consiste
                    no aluno ir selecionando as etapas até encontrar a sequência
                    correta.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure14}
                    alt="Figura 14"
                    sx={{
                        width: "50%",
                        height: "50%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack width={isDesktop ? "50%" : null} mt={2}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Conforme o aluno acerta a sequência de passos, os
                    personagens da cena ficam verdes, sendo um reforço positivo
                    durante a execução da atividade, como mostrado na{" "}
                    <b>Figura 15</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure15}
                    alt="Figura 11"
                    sx={{
                        width: "50%",
                        height: "50%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack width={isDesktop ? "50%" : null} mt={2}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Quando o aluno erra a sequência, os personagens recebem a
                    coloração avermelhada, denotando que não estão no caminho
                    correto e um aviso de recomeço conforme insistam em
                    continuar, como exibido na <b>Figura 16</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure16}
                    alt="Figura 16"
                    sx={{
                        width: "50%",
                        height: "50%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack width={isDesktop ? "50%" : null} mt={2}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Na condição onde o aluno consegue atingir o objetivo
                    completando a atividade, ele recebe as parabenizações,
                    apresentado na <b>Figura 17</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure17}
                    alt="Figura 16"
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
                        href="https://scratch.mit.edu/projects/1072413639"
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
