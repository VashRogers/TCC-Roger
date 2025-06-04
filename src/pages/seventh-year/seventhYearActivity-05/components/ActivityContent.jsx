import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table7pt1 from "./assets/table7pt1.png";
import table7pt2 from "./assets/table7pt2.png";

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
                    Para o desenvolvimento da habilidade EF07CO05, que possui o
                    objetivo criar algoritmos fazendo uso da decomposição e do
                    reúso no processo de solução de forma colaborativa e
                    automatizá-los usando uma linguagem de programação. A
                    Decomp. EF07CO05 - Atividade #01, consiste em um desafio
                    para ajudar a organizar uma biblioteca, fomentando os
                    conceitos de decomposição, como mostrado na <b>Tabela 7</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table7pt1}
                    alt="Tabela 7pt1"
                    sx={{
                        width: "100%",
                        height: "80%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table7pt2}
                    alt="Tabela 7pt2"
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
                    A Decomp. EF07CO05 - Atividade #01 ensina os alunos a
                    dividir um problema grande, como organizar livros por gênero
                    e título, em subtarefas que podem ser resolvidas
                    separadamente. Ao identificar subproblemas como separação,
                    ordenação e junção de listas, os alunos aprendem a decompor
                    tarefas complexas em partes gerenciáveis, com cada grupo
                    contribuindo para uma etapa específica da solução. O reúso
                    ocorre ao aplicar o mesmo método de ordenação para cada
                    gênero, mostrando como operações podem ser repetidas com
                    diferentes dados. A atividade reforça também a integração
                    dos módulos para formar uma solução completa, promovendo o
                    trabalho colaborativo e a construção de um algoritmo que, ao
                    final, organiza os livros de forma sistemática e eficiente.
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
