const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda de manhã olha o seu celular e descobre que as queimadas e desmatamentos aumentaram 100%.",
        alternativas: [
            {
                texto: "Meu Deus porque não fazem nada?",
                afirmacao: "Esse governo que não ajuda"
            },
            {
                texto: "To nem ai não muda nada para mim",
                afirmacao: "Só quero saber do meu"
            }
        ]
    },
    {
        enunciado: "Em um belo dia você acorda... pega seu celular e vê que as queimadas e desmatamento aumentaram em 150%",
        alternativas: [
            {
                texto: "Esta na hora do governo fazer alguma coisa!",
                afirmacao: "Precisamos de alguem que consiga parar isso!"
            },
            {
                texto: "Meu salario ta entrando não vai mudar nada para mim!",
                afirmacao: "Indiferente não se importa com o que aconteceu ao redor"
            }
        ]
    },
    {
        enunciado: "10 anos se passaram e você vê na internet que os niveis de desmatamento aumentaram em 1000%, a aerea verde no Brasil diminuiu cerca de 50% do total.",
        alternativas: [
            {
                texto: "Mas eu falei la atrás que o governo deveria intervir!!!",
                afirmacao: "Novamente jogando o problema nas costas dos outros"
            },
            {
                texto: "Minha casa tem ar condicionado não vai mudar nada para mim!",
                afirmacao: "Falta de interesse, indiferente com o futuro"
            }
        ]
    },
    {
        enunciado: "O ano é 2070 você acorda em um mundo cinza com calor extremo de 75°C pela manhâ e -20° a noite, a humanidade luta para sobreviver ao ambiente inospito você com certeza deu sorte de chegar até aqui, você para e reflite como isso aconteceu?",
        alternativas: [
            {
                texto: "Se o governo tivesse dado atenção ao caso isso não teria acontecido!",
                afirmacao: "de novo jogando a culpa nas costas de alguem?"
            },
            {
                texto: "Você não esta mais bem, a sua falta de interesse seu contibuiu com essa catastrofe e você sabe disso!",
                afirmacao: "Somente no fim você começou a dar atenção ao verdadeiro problema quando já não tinha mais solução"
            }
        ]
    },
    {
        enunciado: "Esse é o futuro que aguarda todos nós! em qual grupo você vai ficar? nos que culpam os outros ou os que não se importam com nada? Talvez você não queira nenhum dos grupos anteriores então vamos fazer parte da minoria que luta por um mundo melhor!",
        alternativas: [
            {
                texto: "Sim eu quero ser a minoria!",
                afirmacao: "Mas hoje com o seu despertar podemos mudar o mundo afinal não somos mais a minoria!"
            },
            {
                texto: "Vou continuar sem me importar!",
                afirmacao: "Sinceramente eu espero que você morra, sempre soube que a saida era seleção e exterminio"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
