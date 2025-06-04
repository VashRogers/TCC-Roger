import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";

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
                    Para o desenvolvimento da habilidade EF07CO02, que busca
                    introduzir conceitos de depuração de código, e usar
                    aplicativos disponíveis que permitem ao programador
                    monitorar a execução de um programa, pará-lo e reiniciá-lo,
                    ativar pontos de parada, entre outros, a Reco. EF07CO02 -
                    Atividade #01, tem como sugestão a utilização da ferramenta <br />
                    <b>Google Colab</b>, tanto para execução dos códigos
                    propostos quanto para a depuração do mesmo. Sendo uma
                    ferramenta de fácil acesso e aprendizado. Para resolução da
                    atividade, fica a critério do professor escolher algum
                    código trabalhado nas atividades anteriores ou criar um novo
                    para a atividade.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://colab.research.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#1976d2",
                            textDecoration: "underline",
                        }}
                    >
                        Acessar Google Colab
                    </a>
                </Typography>
            </Stack>
        </Box>
    );
}
