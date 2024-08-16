const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é convidado para participar de um multirão contra a dengue.",
        alternativas: [
            {
                texto: "Eu vou participar pois isso pode ajudar a todos",
                afirmacao: "Você descidiu pensar no coletivo assim ajudando a si e a comunidade"
            },
            {
                texto: "Não vou participar é uma perca de tempo",
                afirmacao: "Você descidiu pensar em si mesmo e no agora o que te aguarda no futuro?"
            }
        ]
    },
    {
        enunciado: "Os casos de dengue continuam a subir o que você faz?",
        alternativas: [
            {
                texto: "Continuarei ajudando a todos",
                afirmacao: "Parece que sua ajuda não está adiantando,"
            },
            {
                texto: "Não me preucupo pois sem que sempre tem um troxa para fazer o serviço por mim",
                afirmacao: "Você reage com indiferença, não se importa com o que acontece ao redor"
            }
        ]
    },
    {
        enunciado: "Você contraiu dengue neurológica e se encontra em seu leito de morte, o que você pensa?",
        alternativas: [
            {
                texto: "Eu vivi bem, apesar de todo esforço no fim não adiantou,",
                afirmacao: "Você está pronto para partir em paz"
            },
            {
                texto: "Que diabos, como isso foi acontecer?",
                afirmacao: "Você está com raiva por estar chegando ao fim da sua vida"
            }
        ]
    },
    {
        enunciado: "Quando você percebe está no seu, ao seu lado Gabriel",
        alternativas: [
            {
                texto: "Fico feliz por estar no céu",
                afirmacao: "Você sabe que no fundo sempre tentou ajudar a todos e não possuí temor"
            },
            {
                texto: "Fico feliz por estar salvo",
                afirmacao: "Você sabe que no fundo sempre tentou ajudar a todos e não possuí temor"
            }
        ]
    },
    {
        enunciado: "Na hora do julgamento o que te é dito?",
        alternativas: [
            {
                texto: "Você ajudou o maximo de pessoas que pode por isso...",
                afirmacao: "Você é salvo por suas escolhas em vida"
            },
            {
                texto: "Você acha que ajudou o maximo de pessoas que pode por isso...",
                afirmacao: "Você é condenado por suas atitudes passadas "
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
