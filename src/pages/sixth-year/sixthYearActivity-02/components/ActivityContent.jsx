import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table3 from "./assets/table3.png";

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
                    A habilidade EF06CO02, explorando a função de elaborar
                    algoritmos que envolvam instruções sequenciais, de repetição
                    e de seleção usando uma linguagem de programação, introduz
                    os principais conceitos de laço de repetição. A Alg.
                    EF06CO02 - Atividade #01, sugere um cálculo de média
                    simples, como mostra a <b>Tabela 3</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table3}
                    alt="Tabela 3"
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
                    A atividade de cálculo da média das notas possibilita aos
                    alunos criar um algoritmo em Python que incorpora instruções
                    sequenciais, de repetição e de seleção. Os alunos utilizam
                    instruções sequenciais para definir e somar as notas,
                    aplicando laços de repetição para iterar sobre a lista de
                    notas. Além disso, podem implementar estruturas de seleção
                    para validar os valores, garantindo que estejam dentro de um
                    intervalo aceitável. Dessa forma, a atividade proporciona
                    uma experiência prática completa na elaboração de
                    algoritmos, explorando os conceitos fundamentais da
                    programação
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
