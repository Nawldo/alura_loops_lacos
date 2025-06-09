// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado


// Definição do número secreto que o laço tentará adivinhar
const numeroSecreto = 8; 

// Inicialização de variáveis: número gerado aleatoriamente e contador de tentativas
let numeroAleatorio = 0;
let tentativas = 0;

// Laço `while` que continua rodando até que o número aleatório seja igual ao número secreto
while (numeroSecreto !== numeroAleatorio) {
    // Gera um número aleatório entre 1 e 50
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    
    // Incrementa a quantidade de tentativas
    tentativas ++
}

// Exibe no console quantas tentativas foram necessárias para acertar o número secreto
console.log(`Adivinhou em ${tentativas} tentativas`);


// Agora outro laço que gera um número aleatório e continua rodando até encontrar um número par
// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

let numeroRandom = 0; // Inicializa a variável para armazenar o número aleatório

do {
    // Gera um número aleatório entre 1 e 50
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);

    // Exibe o número gerado no console a cada iteração
    console.log(numeroRandom);

} while (numeroRandom % 2 !== 0); // O laço continua enquanto o número for ímpar

// Quando o número par for encontrado, ele é exibido no console
console.log(numeroRandom);


// Define uma string que queremos verificar se é um palíndromo
const texto = 'arara';

// Inicializa uma variável para armazenar o texto invertido
let textoInvertido = '';

// Estrutura de repetição `for` para percorrer os caracteres da string de trás para frente
for (let i = texto.length - 1; i >= 0; i--) {
    // Adiciona cada caractere à variável `textoInvertido`, criando uma versão invertida da string original
    textoInvertido += texto[i];
}

// Faz uma comparação lógica para verificar se o texto original e o invertido são iguais
const result = texto === textoInvertido
    ? `${texto} é palíndromo`  // Se forem iguais, exibe que a palavra é um palíndromo
    : `${texto} não é palíndromo`; // Se forem diferentes, indica que não é um palíndromo

// Exibe o resultado no console
console.log(result);


//Neste exercício, utilizamos o laço for para percorrer 
// uma sequência de números até um valor específico.
//temos um valor final definido. Essa é justamente uma das principais situações em que o for é ideal.

const numeroFinal = 5;

for (i = 1; i <= numeroFinal; i++) {
    console.log(i)
}

const numeroRegre = 10;

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log("Lançar!")