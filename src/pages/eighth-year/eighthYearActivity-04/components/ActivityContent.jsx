import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table10 from "./assets/table10.png";

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
                    A habilidade EF08CO04 e EF09CO02, tem como foco em construir
                    soluções computacionais de problemas de diferentes áreas do
                    conhecimento, de forma individual e colaborativa,
                    selecionando as estruturas de dados e técnicas adequadas.
                    Para desenvolver essa habilidade a Decomp. EF08CO04 -
                    Atividade #01, convida os alunos a desenvolver uma solução
                    computacional para registrar e classificar as temperaturas
                    diárias de uma semana em uma cidade, como mostra a{" "}
                    <b>Tabela 10</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table10}
                    alt="Tabela 10"
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
                    A Decomp. EF08CO04 - Atividade #01 promove a compreensão de
                    conceitos fundamentais de programação, a decomposição de
                    problemas em etapas gerenciáveis e a colaboração entre os
                    alunos, estimulando o pensamento crítico e o raciocínio
                    algorítmico. Dessa forma, a atividade integra práticas de
                    aprendizado individual e colaborativo, preparando os alunos
                    para resolver problemas em diferentes áreas do conhecimento.
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
