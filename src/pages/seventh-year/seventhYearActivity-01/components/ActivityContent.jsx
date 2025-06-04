import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table5 from "./assets/table5.png";

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
                    A EF07CO01, primeira habilidade do sétimo ano do ensino
                    fundamental, com objetivo de criar soluções de problemas
                    para os quais seja adequado o uso de registros e matrizes
                    unidimensionais para descrever suas informações e
                    automatizá-las usando uma linguagem de programação. A
                    Abstra. EF07CO01 - Atividade #01, tem um objetivo de
                    desenvolver um programa que permita o cadastro de animais de
                    estimação e a consulta por tipo de animal. Os alunos podem
                    utilizar listas (matrizes unidimensionais) para armazenar
                    informações e realizar buscas <b>(Tabela 5)</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table5}
                    alt="Tabela 5"
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
                    Com essa atividade os alunos aprendem a organizar dados,
                    como nome, tipo e idade dos animais, utilizando listas para
                    armazenar essas informações de forma estruturada. Isso
                    permite que desenvolvam habilidades de lógica de programação
                    ao implementar funções de cadastro e consulta, reforçando a
                    importância de escolher a estrutura de dados adequada para
                    resolver problemas de maneira eficiente. Assim, a atividade
                    promove o pensamento crítico sobre a organização de
                    informações, uma competência essencial.
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
