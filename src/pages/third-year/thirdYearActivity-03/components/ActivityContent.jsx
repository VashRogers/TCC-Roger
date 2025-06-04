import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure28 from "./assets/figure28.png";
import figure29 from "./assets/figure29.png";

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
                    Para o desenvolvimento da habilidade EF03CO03, busca-se
                    aplicar a estratégia de decomposição para resolver problemas
                    complexos, dividindo esse problema em partes menores,
                    resolvendo-as e combinando suas soluções. A Decomp. EF03CO03
                    - Atividade #0116 , utiliza do recurso de entradas de texto
                    para ajudar a decompor e montar uma sequência de passos para
                    ajudar colegas a plantar uma árvore (Figura 28).
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure28}
                    alt="Figura 28"
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
                    Conforme o aluno insere o passo ou etapa do problema, ele é
                    exibido na tela, conforme a Figura 29.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure29}
                    alt="Figura 29"
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
                    Essa atividade permite diversas soluções possíveis,
                    incentivando a discussão entre alunos e o professor, além de
                    promover comparações e sugestões de melhorias. Esse ambiente
                    colaborativo estimula o pensamento crítico, a criatividade e
                    a troca de conhecimentos, ajudando os alunos a refletirem
                    sobre diferentes abordagens e a desenvolverem habilidades de
                    resolução de problemas de forma conjunta
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1073937037"
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
