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

/* const numeroFinal = 5;

for (i = 1; i <= numeroFinal; i++) {
    console.log(i)
}


const numeroRegre = 10;

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log("Lançar!")
 */

/* Aqui, começamos o for com a variável i = 1 e seguimos até i <= numeroFinal. A cada passo, 
usamos i++ para incrementar. Dentro do laço, aplicamos a condição i % 2 === 0 para verificar se o número é par.
O operador % (módulo) retorna o resto da divisão de i por 2. Se esse resto for zero,
então i é múltiplo de 2 — ou seja, par — e o número é exibido com console.log(i).
Essa lógica funciona bem para qualquer intervalo definido. */

//usando o for
const numeroMaximo = 10;

/* for (let i = 0; i <= numeroMaximo; i++) {
     if (i % 2 === 0)
        console.log(i)
}

const numeroFinal = 10;
let i = 1;

//usando o while
while (i <= numeroFinal) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
 */

/* Para resolver essa atividade, utilizamos um laço for para percorrer cada caractere da string senha. 
A propriedade .length nos informa quantos caracteres a string possui, e usamos isso como limite da repetição.

O laço começa do índice 0 e vai até senha.length - 1, porque os índices em JavaScript são baseados em zero —
 ou seja, se a string tem 14 caracteres, o último índice será 13.

Dentro do for, acessamos cada caractere usando senha[i], e exibimos essa informação no console junto com a posição correspondente. 
Para isso, usamos uma template literal — uma forma moderna e mais legível de montar strings em JavaScript. Em vez de concatenar com +, 
usamos crase (`) e ${...} para interpolar valores dentro da string. */

const senha = "segurança@2025";

for (let i = 0; i < senha.length; i++) {
    console.log(`Caractere ${i + 1}: ${senha[i]}`)
}


 /*  Nesta atividade, usamos o laço while porque não sabemos previamente quantos nomes serão processados
   — o programa precisa continuar até que a palavra "fim" seja encontrada. A cada iteração, 
  verificamos se o nome atual é diferente de "fim" através do operador !==. Enquanto essa condição for verdadeira,
  o laço continua rodando.

 Criamos uma variável i para controlar o índice atual. A cada volta do laço,
 exibimos o nome com console.log("Nome:", entradas[i]) e em seguida incrementamos i.
 Assim, o programa avança elemento por elemento, até que encontre "fim" — e então para. */

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel" ];
let i = 0;

while (entradas[i] !== "fim") {
    console.log("Nome:", entradas[i])
    i++;
}

