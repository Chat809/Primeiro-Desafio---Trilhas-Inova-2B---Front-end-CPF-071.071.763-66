document.getElementById("btnExercicio1").addEventListener("click", executarExercicio1);
document.getElementById("btnExercicio2").addEventListener("click", executarExercicio2);

function executarExercicio1() {
    let nome = "Khalil Salomão"; 
    console.log(nome); 

    let idade = 25; 
    let altura = 1.75;
    console.log(`Idade: ${idade}, Altura: ${altura}`);

    let preco = 50; 
    let desconto = 0.2;
    let precoFinal = preco * (1 - desconto);
    console.log(`Preço com desconto: R$ ${precoFinal.toFixed(2)}`);

    let temperatura = 30; 
    if (temperatura > 25) {
        console.log("Está calor!");
    } else {
        console.log("Está fresco!");
    }

    let idadePessoa = 20; 
    if (idadePessoa >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }

    let nota = 8; 
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5 && nota < 7) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }

    let numero1 = 10;
    let numero2 = 10;
    if (numero1 === numero2) {
        console.log("Os números são iguais");
    } else {
        console.log("Os números são diferentes");
    }

    let nomePessoa = "Khalil Salomão"; 
    let idadePessoa2 = 25;
    console.log("Olá, meu nome é " + nomePessoa + " e eu tenho " + idadePessoa2 + " anos");

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    let numeroUsuario;
    do {
        numeroUsuario = prompt("Digite um número:");
    } while (numeroUsuario != 5);

    for (let i = 1; i <= 10; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    }

    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
}

function executarExercicio2() {
    function calcularAreaCirculo(raio) {
        return Math.PI * Math.pow(raio, 2);
    }
    console.log("Área do círculo: " + calcularAreaCirculo(5));

    function somarNumeros(a, b) { 
        return a + b;
    }
    console.log("Soma dos números: " + somarNumeros(5, 7));

    function refatorarCodigo() { 
        let x = 10;
        let y = 20;
        let resultado = somarNumeros(x, y);
        console.log("Resultado da soma: " + resultado);
    }

    refatorarCodigo();
}
