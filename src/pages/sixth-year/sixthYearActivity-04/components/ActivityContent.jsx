import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure46 from "./assets/figure46.png";
import figure47 from "./assets/figure47.png";

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
                    Para o desenvolvimento da habilidade <b>EF06CO04</b> e{" "}
                    <b>EF06CO04</b>, com objetivo de construir soluções de
                    problemas usando a técnica de decomposição e automatizar
                    tais soluções usando uma linguagem de programação. A Decomp.
                    EF06CO04 - Atividade #01, propõe cálculos de áreas de
                    figuras geométricas que necessitam ser divididas para que
                    possam ser calculadas separadamente, fomentando a ideia de
                    decompor problemas maiores em menores, ao final juntado o
                    todo e solucionando o respectivo problema, como mostrado na{" "}
                    <b>Figura 46</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure46}
                    alt="Figura 46"
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
                    Para o cálculo da figura geométrica contida da Figura 46,
                    cabe o aluno desenvolver a habilidade de raciocínio para
                    dividir o elemento e aplicar a fórmula da aŕea do triângulo
                    e área do retângulo. A outra figura geométrica, contida na
                    <b>Figura 47</b>, utiliza o mesmo conceito, sendo porém,
                    mais elaborada.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure47}
                    alt="Figura 47"
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
                    Essa atividade busca comparar diferentes instâncias do
                    problema de calcular a área de uma figura geométrica,
                    identificando que o que varia entre elas são as medidas que
                    podem ser alteradas e automatizadas com a linguagem de
                    programação.
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
