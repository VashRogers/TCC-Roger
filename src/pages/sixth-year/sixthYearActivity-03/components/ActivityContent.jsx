import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table4 from "./assets/table4.png";

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
                    Para o desenvolvimento da habilidade <b>EF06CO03</b> e{" "}
                    <b>EF06CO05</b>, com o objetivo de descrever com precisão a
                    solução de um problema, construindo o programa que
                    implementa a solução descrita. A BNCC Computação deixa claro
                    que o aluno precisa entender que o mais importante é a
                    construção do algoritmo, a ideia aqui não é apenas descrever
                    as linhas de código, mas sim descrever em um alto nível de
                    abstração como o problema é resolvido. A Alg. EF06CO03 -
                    Atividade #01, promove a construção de um algoritmo, sendo
                    possível desenvolver a capacidade de trabalhar com listas,
                    funções e condicionais (Tabela 4).
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table4}
                    alt="Tabela 4"
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
                    A atividade visa fortalecer a compreensão dos alunos sobre
                    como descrever um problema, a construção de algoritmos e a
                    implementação desses algoritmos em uma linguagem de
                    programação, incentivando os alunos a formular a solução em
                    português antes de implementá-la em código, o que reforça a
                    importância do pensamento algorítmico.
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
