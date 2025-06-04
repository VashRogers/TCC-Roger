import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table2 from "./assets/table2.png";

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
                    Para o desenvolvimento da habilidade EF06CO01, com o
                    objetivo de classificar informações, agrupando-as em
                    coleções e associando cada coleção a um tipo de dados.{" "}
                    <br />A Reco. EF06CO01 - Atividade #01, propõe um enunciado
                    conforme a <b>Tabela 2</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table2}
                    alt="Tabela 2"
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
                    Essa atividade incentiva os alunos a reconhecer diferentes
                    tipos de dados e organizá-los em listas específicas. Ao
                    separar os itens mistos em categorias distintas, os alunos
                    exercitam o conceito de coleções associadas a tipos de
                    dados, que é fundamental para o entendimento da
                    classificação e organização de informações no mundo da
                    programação, evidenciando a importância de agrupar dados
                    semelhantes, facilitando o armazenamento, a manipulação e o
                    acesso a essas informações de forma organizada e eficiente.
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
