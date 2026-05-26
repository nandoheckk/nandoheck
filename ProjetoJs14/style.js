console.log('Introdução ao JavaScript');

//window.alert('ALERTA! saia deste site');
//alert('Eu avisei!');

document.getElementById('titulo').innerHTML = 'Novo texto'; 

//Variaveis
let idade = 18;
const idadeMaxima = 20; 

//Tipo Booleano
let luz = true;

//Ponto fluante
let salario = 26500.87;

//String
let none = 'Fernando Heck';

//Char
let letra = 'F';

// Lista
let compras = ['Arroz', 'Carne', 'Feijão']

//Objetos - Dicionarios
let pessoa = { 
    none: 'Fernando',
    Number: 18
}

//Função

function bemVindo() {
    console.log('bem-vindo Neni')
}

function soma(valor1, valor2) {
    let somatorio = valor1 + valor2
    console.log ('resultado' + somatorio) 
    return somatorio;
}

//DESAFIO
// Crie uma função que recebao nome do usuario ()
// imprima e retorno o nome dele;

function nomeUsuario() {
    nome = prompt('Fernando');
    console.log(`Seja bem-vindo ${nome} ao nosso site!`);
}

//DESAFIOS

//1
//Função que troque a cor do h1
//A cor que precisa ser definida por parametro (na chamado do usuario)
function mudarCorTitulo(cor) {
    let titulo = document.getElementById('titulo');
    titulo.style.color = cor;
}

//2
//Contador digital
//Somar +1 na interface (h2, por exemplo);
function incrementarContador() {
    let elementoContador = document.getElementById('contador');
    let valorAtual = parseInt(elementoContador.innerText); 
    elementoContador.innerText = valorAtual + 1;
}

//3
//Atividade dos slides - Calculo de Média.
function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    let media = (nota1 + nota2 + nota3) / 3;
    let painelResultado = document.getElementById('resultadoMedia');

    if (media >= 7) {
        painelResultado.innerHTML = `Média: <strong>${media.toFixed(1)}</strong> - Aprovado! 🎉`;
        painelResultado.style.color = "green";
    } else {
        painelResultado.innerHTML = `Média: <strong>${media.toFixed(1)}</strong> - Reprovado/Recuperação. 😢`;
        painelResultado.style.color = "red";
    }
}