import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure23 from "../components/assets/figure23.png";
import figure24 from "../components/assets/figure24.png";
import figure25 from "../components/assets/figure25.png";

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
                    A primeira habilidade do terceiro ano do ensino fundamental,
                    EF03CO01 tem o objetivo de associar os valores “verdadeiro”
                    e “falso” a sentenças lógicas que dizem respeito a situações
                    do dia a dia. Ao associar valores "verdadeiro" e "falso" a
                    sentenças lógicas, o foco está em identificar e reconhecer
                    padrões de verdade e falsidade em situações cotidianas. A
                    Reco. EF03CO01 - Atividade #0114 , por meio de uma
                    interface, exibe uma sentença que o aluno deve
                    classificá-la, como mostrado na <b>Figura 23</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure23}
                    alt="Figura 23"
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
                    Quando ocorre o acerto, a próxima sentença irá ser exibida,
                    em caso de falha uma mensagem que indica o erro é emitida
                    (Figura 24).
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure24}
                    alt="Figura 24"
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
                    Após a conclusão da atividade, uma mensagem é exibida na
                    tela indicando o término do processo, confirmando que todos
                    os passos foram concluídos com sucesso, como na <b>Figura 25</b>.
                </Typography>
            </Stack>
                
            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure25}
                    alt="Figura 25"
                    sx={{
                        width: "80%",
                        height: "50%",
                        borderRadius: 2,
                        boxShadow: 1,
                    }}
                />
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1073264906"
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
