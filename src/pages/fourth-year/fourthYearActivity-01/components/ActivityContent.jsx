import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure30 from "./assets/figure30.png";
import figure31 from "./assets/figure31.png";
import figure32 from "./assets/figure32.png";
import figure33 from "./assets/figure33.png";

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
                    Para o desenvolvimento da habilidade EF04CO01, com base no
                    documento disponibilizado no site BNCC Computação, buscou-se
                    desenvolver uma atividade similar e mais interativa.
                    Utilizando o conceito de matrizes que representam o
                    tabuleiro, onde existe um robô como ator principal e alguns
                    obstáculos, deve-se conduzir o robô até a saída, como
                    mostrado na <b>Figura 30</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure30}
                    alt="Figura 30"
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
                    Utiliza-se de uma interface interativa onde o aluno exerce
                    instruções ao robô para encontrar a saída (Figura 31). A
                    primeira interação configura em definir a orientação do
                    robô, ou seja, para qual lado ele irá seguir.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure31}
                    alt="Figura 31"
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
                    A primeira interação configura em definir a orientação do
                    robô, ou seja, para qual sentido ele irá seguir. Para que o
                    ator principal consiga andar por meio das coordenadas é
                    necessário que a posição para qual ele irá se deslocar seja
                    configurada, inicialmente a posição nula é definida,
                    representando “frente”. A Figura 32 exibe as possíveis
                    direções.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure32}
                    alt="Figura 32"
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
                    Com a direção definida é possível selecionar a opção
                    “Andar”, que irá exibir uma caixa de entrada de dados em que
                    o aluno será capaz de informar a quantidade de passos a
                    serem executados pelo robô, sendo um passo equivalente a um
                    bloco no tabuleiro, como exibido na Figura 33.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure33}
                    alt="Figura 33"
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
                    Após a resolução dessa atividade, também é possível trazer
                    debates de situações similares, com foco na digitalização
                    para ambientes modelados por meio de matrizes, como sistemas
                    de mapas em jogos eletrônicos, organização de assentos em
                    auditórios ou cinemas, e até a distribuição de recursos em
                    uma grade urbana. Esses exemplos ajudam a aprofundar a
                    compreensão sobre como as matrizes podem representar de
                    forma eficiente dados complexos, permitindo manipulação e
                    análise de informações estruturadas para resolver problemas
                    do cotidiano.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1073953443"
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
