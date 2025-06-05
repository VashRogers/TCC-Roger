import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import table9 from "./assets/table9.png";

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
                    Para desenvolver a habilidade EF08CO02, com o objetivo de
                    desenvolver a capacidade de criar soluções de problemas para
                    os quais seja adequado o uso de listas para descrever suas
                    informações e automatizá-las usando uma linguagem de
                    programação, a Decomp. EF08CO02 - Atividade #01 convida o
                    aluno a usar listas para resolver um problema real,
                    analisando como combinar duas listas ordenadas em uma única
                    lista. Eles também terão a oportunidade de utilizar a
                    recursão como técnica opcional e identificar a importância
                    do caso base e da convergência em um programa recursivo
                    <b>(Tabela 9)</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={table9}
                    alt="Tabela 9"
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
                    A Decomp. EF08CO02 - Atividade #01 visa ensinar os alunos a
                    criar soluções para problemas que envolvem o uso de listas
                    para armazenar e organizar informações, além de apresentar a
                    recursão como uma técnica de resolução. Ao pedir que unam
                    duas pilhas de cartas ordenadas, os alunos exploram
                    conceitos fundamentais como o uso de listas para representar
                    estruturas de dados ordenadas e a aplicação de recursão para
                    construir uma lista final ordenada.
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
