import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure37 from "./assets/figure37.png";
import figure38 from "./assets/figure38.png";

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
                    Para o desenvolvimento da habilidade EF04CO03, que visa
                    trabalhar a criação e simulação de algoritmos representados
                    em linguagem oral, escrita ou pictográfica, que incluem
                    sequências e repetições simples, para resolver problemas de
                    forma independente e em colaboração. A Alg. EF04CO03 -
                    Atividade #0119 , por meio de ações pré-definidas e uma
                    interface interativa, proporciona a possibilidade do aluno
                    desenvolver um algoritmo para problemas do cotidiano,
                    selecionando e arrastando cada etapa até a linha
                    correspondente (Figura 37).
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure37}
                    alt="Figura 37"
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
                    A outra etapa da atividade consiste em um algoritmo com mais
                    passos, usando o mesmo conceito de arrastar as etapas para
                    as respectivas linhas, como mostrado na <b>Figura 38</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure38}
                    alt="Figura 38"
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
                    O formato de arrastar e soltar das etapas permite que os
                    estudantes representem as instruções em linguagem
                    pictográfica, aproximando-se da lógica algorítmica de forma
                    intuitiva e acessível. A atividade também incentiva a
                    colaboração entre os alunos, que para discutir ideias e
                    estratégias, promovendo um aprendizado cooperativo e
                    fortalecendo sua autonomia na resolução de problemas.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1075019247"
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
