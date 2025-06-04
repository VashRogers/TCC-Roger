import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure40 from "./assets/figure40.png";

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
                    A habilidade EF05CO02 consiste em reconhecer objetos do
                    mundo real e digital que podem ser representados através de
                    grafos que estabelecem uma organização com uma quantidade
                    variável de vértices conectados por arestas, fazendo
                    manipulações simples sobre estas representações. A Abstra.
                    EF05CO02 - Atividade #0121 , estimula a organização de um
                    grafo, introduzindo conceitos básicos. Usando uma interface
                    interativa as palavras ficam no canto esquerdo e o grafo à
                    direita, o intuito é levar as palavras até seus respectivos
                    lugares, como mostrado na <b>Figura 40</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure40}
                    alt="Figura 40"
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
                    A interface interativa facilita a compreensão dos conceitos
                    básicos de grafos, como vértices e arestas. Os alunos são
                    desafiados a associar as palavras aos seus respectivos
                    lugares no grafo, promovendo uma compreensão prática e
                    visual das relações entre os elementos. Os alunos podem
                    experimentar manipulações básicas no grafo, fortalecendo a
                    capacidade de organizar e compreender dados estruturados.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1078714109"
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
