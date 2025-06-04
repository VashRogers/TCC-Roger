import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../../../../hooks/useResponsive";
import figure34 from "./assets/figure34.png";
import figure35 from "./assets/figure35.png";
import figure36 from "./assets/figure36.png";

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
                    A habilidade EF04CO02, busca reconhecer objetos do mundo
                    real e/ou digital que podem ser representados através de
                    registros que estabelecem uma organização na qual cada
                    componente é identificado por um nome, fazendo manipulações
                    sobre estas representações. A Abstra. EF04CO02 - Atividade
                    #0118 , com base na sugestão do site da BNCC, reúne um
                    conjunto de informações pessoais em cada documento (Figura
                    34). Essas informações podem ser recuperadas e filtradas de
                    acordo com a cidade ou data de nascimento.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure34}
                    alt="Figura 34"
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
                    Selecionando um ou mais documentos, dados como nome, cidade
                    e data de nascimento são emitidos sobre cada documento, como
                    mostrado na Figura 35.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure35}
                    alt="Figura 35"
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
                    Para manipulação e recuperação dos dados, o sistema oferece
                    duas opções de busca: por cidade ou por data de nascimento.
                    Ao escolher uma dessas opções, o aluno utiliza uma caixa de
                    texto para inserir o termo desejado. Caso o valor digitado
                    seja válido, o sistema localiza e exibe os documentos
                    correspondentes que atendem a esses critérios específicos.
                    Essa funcionalidade permite uma navegação prática e
                    direcionada, facilitando a consulta de informações. A Figura
                    36 ilustra o processo de como os resultados são recuperados
                    e apresentados, promovendo uma experiência interativa.
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null} alignItems="center">
                <Box
                    component="img"
                    src={figure36}
                    alt="Figura 36"
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
                    A atividade permite que os alunos identifiquem objetos do
                    mundo real e digital que podem ser representados através de
                    registros organizados, nos quais cada componente é associado
                    a um nome específico. Esse exercício facilita a compreensão
                    sobre como utilizar registros para estruturar dados,
                    simplificando a manipulação e recuperação de informações
                </Typography>
            </Stack>

            <Stack my={1} width={isDesktop ? "50%" : null}>
                <Typography fontSize={isDesktop ? 20 : 14}>
                    Como a atividade foi realizada com a ajuda da ferramenta
                    "Scratch", abaixo o link para acessar a atividade:
                </Typography>

                <Typography fontSize={isDesktop ? 20 : 14}>
                    <a
                        href="https://scratch.mit.edu/projects/1074236891"
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
