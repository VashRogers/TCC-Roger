import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table11 from "./assets/table11.png";

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
                    A última atividade elaborada desenvolve a habilidade
                    EF09CO01, com objetivo de criar soluções de problemas para
                    os quais seja adequado o uso de árvores e grafos para
                    descrever suas informações e automatizá-las usando uma
                    linguagem de programação. A Abstra. EF09CO01 - Atividade
                    #01, convida o aluno a usar grafos para representar mapas de
                    cidades e a construir um algoritmo para encontrar o caminho
                    entre duas cidades. O objetivo é aplicar o conceito de
                    grafos para resolver problemas práticos do dia a dia, como
                    navegação e busca de rotas, como exemplificado na{" "}
                    <b>Tabela 11</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table11}
                    alt="Tabela 11"
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
                    A atividade que desenvolve a habilidade EF09CO01 explora a
                    representação de cidades e estradas em um grafo, em que cada
                    cidade é um nó e cada estrada é uma aresta com peso. Ao
                    implementar algoritmos de busca, como BFS (Busca em Largura)
                    ou DFS (Busca em Profundidade), os alunos conseguem explorar
                    o grafo para encontrar o menor caminho entre duas cidades.
                    Esse processo requer a construção de uma solução
                    computacional que usa grafos para organizar dados e
                    algoritmos para automatizar a busca pela rota mais
                    eficiente, alinhando-se perfeitamente com o objetivo
                    proposto.
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
