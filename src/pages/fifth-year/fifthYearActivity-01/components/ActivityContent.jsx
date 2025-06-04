import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure39 from "./assets/figure39.png";

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
                    A primeira habilidade do quinto ano do ensino fundamental
                    EF05CO01, busca desenvolver a capacidade de reconhecer
                    objetos tanto dos cenários reais quanto digitais, que podem
                    ser representados através de listas que estabelecem uma
                    organização na qual há um número variável de itens dispostos
                    em sequência, fazendo manipulações simples sobre estas
                    representações. A Reco. EF05CO01 - Atividade #0120 , tem o
                    objetivo de exibir um conjunto de itens e que o aluno
                    classifique-os conforme as categorias corretas, como
                    mostrado na <b>Figura 39</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure39}
                    alt="Figura 39"
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
                    Ao classificar itens conforme as categorias corretas, os
                    alunos praticam a organização e categorização de dados, o
                    que aprimora sua capacidade de identificar padrões e
                    estabelecer critérios para agrupamento. Essa atividade
                    também ajuda a desenvolver a flexibilidade cognitiva, pois o
                    aluno precisa entender que listas podem variar em tamanho e
                    ser reorganizadas de acordo com as necessidades da tarefa.
                </Typography>
            </Stack>


            <Stack my={1} width={isDesktop ? "50%" : null}>
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
            </Stack>
        </Box>
    );
}
