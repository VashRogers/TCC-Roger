import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure41 from "./assets/figure41.png";
import figure42 from "./assets/figure42.png";
import figure43 from "./assets/figure43.png";
import figure44 from "./assets/figure44.png";
import figure45 from "./assets/figure45.png";

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
                    A EF05CO03, última habilidade do quinto ano do ensino
                    fundamental, em que o professor pode apresentar diferentes
                    sentenças lógicas e solicitar que os alunos determinem seus
                    valores verdade, desenvolvida por meio da Abstra. EF05CO03 -
                    Atividade #0122 , traz um “gatinho” como protagonista de
                    quiz de verdadeiro e falso (Figura 41).
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure41}
                    alt="Figura 41"
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
                    O controle do ator principal é realizado através das setas
                    direcionais do teclado, permitindo que o usuário o movimente
                    de forma intuitiva e responsiva. Ao utilizar as teclas, o
                    personagem pode não apenas se deslocar para a esquerda e
                    para a direita, mas também executar movimentos de pulo,
                    elevando-se verticalmente. Dessa forma, o jogador possui
                    controle total sobre as ações básicas de movimentação,
                    possibilitando interações variadas dentro do cenário, como
                    ilustrado na <b>Figura 42</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure42}
                    alt="Figura 42"
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
                    Inicialmente o ator encontra-se no canto esquerdo da tela,
                    uma sentença lógica no topo é apresentada e 2 caixas com
                    respectivos valores verdadeiro e falso são exibidos na tela,
                    como mostrado na <b>Figura 43</b>.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure43}
                    alt="Figura 43"
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
                    O aluno, ao conduzir o personagem através do ambiente
                    interativo, até ultrapassar a última sentença lógica, ao
                    final dessa trajetória, recebe uma mensagem de
                    congratulações, parabenizando o aluno por ter concluído com
                    sucesso todas as etapas do desafio e reconhecendo seu
                    esforço e atenção ao longo da atividade (Figura 44).
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure44}
                    alt="Figura 44"
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
                    Caso o aluno selecione um valor incorreto para a sentença
                    lógica, ele é imediatamente direcionado para uma tela, onde
                    aparece a mensagem “tente novamente”, incentivando-o a
                    revisar sua escolha. Esse redirecionamento serve como uma
                    oportunidade para o aluno refletir sobre a sentença e
                    corrigir o erro, como na Figura 45.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure45}
                    alt="Figura 45"
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
                    Ao conduzir o personagem pelo ambiente interativo e
                    interagir com as sentenças, o aluno não apenas aplica
                    conhecimentos prévios, mas também é incentivado a refletir
                    criticamente sobre suas escolhas.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href=" https://scratch.mit.edu/projects/1079674165"
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
