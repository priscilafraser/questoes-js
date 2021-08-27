// //1. Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!"

 const input = require("prompt-sync")();

// console.log("O primeiro programa a gente nunca esquece!");

// console.log();


// //2. Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

// const nome = "Priscila Pereira de Miranda";
// const endereco = "Av. Coronel Sávio Belota, n96, Novo Aleixo";
// const cep = "69098270";

// console.log(`Nome: ${nome}`);
// console.log(`Endereço: ${endereco}`);
// console.log(`CEP: ${cep}`);

// console.log();


// //3. Faça um programa que mostre na tela uma letra de música que você gosta (Se você utilizar template string o console obedece a quebra de linha).

// console.log(`É tão forte quanto o vento quando sopra
// Tronco forte que não quebra, não entorta
// Podes crer, podes crer
// Eu tô falando de amizade`);

// console.log();


// /*4. Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.Como primeiro passo, escreva um programa que produza a seguinte saída:
//     ```
//     ALUNO (A)  NOTA
//     =========  ====
//     ALINE      9.0
//     MÁRIO      DEZ
//     SÉRGIO     4.5
//     SHIRLEY    7.0
//     ```*/

// //5. Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

// const menu = (`
//      1 - Cadastrar
//      2 - Pesquisar
//      3 - Editar
//      4 - Excluir`
// );

// console.log(menu);

// const opcao = input("Digite a opção desejada: ");

// if (opcao == 1) {
//     console.log("Cadastrar");
// }else if (opcao == 2) {
//     console.log("Pesquisar");
// } else if (opcao == 3) {
//     console.log("Editar");
// } else if (opcao == 4) {
//     console.log("Excluir");
// };

// console.log();


// /*6. Escreva um programa que receba dois valores digitados pelo usuário(Utilize o objeto Math para arredondar o calculo):
//     * Quantidade de vida de um monstro (entre 10 e 50);
//     * Valor do ataque do jogador por turno (entre 5 e 10);
//     * Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
//     * O jogador irá derrotar o monstro em 8 turnos.
     
// */
// const vida = input("Digite a quantidade de vida (entre 10 e 50): ");
// const ataque = input("Digite o valor do ataque (entre 5 e 10): ");

// let dano = Math.round(vida/ataque) + (vida % ataque > 0);

// console.log(`Será necessário ${dano} turnos`);



// /*7. E os 10% do garçom?
//     * Defina uma variável para o valor de uma refeição que custou R$ 42,54;
//     * Defina uma variável para o valor da taxa de serviço que é de 10%;
//     * Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.
// */

// const valor = 42.54;
// const taxa = 10/100;
// let calculo = (valor * taxa) + valor;

// console.log(calculo.toFixed(2));

// // 8. Qual o valor do troco?
// //     * Defina uma variável para o valor de uma compra que custou R$100,98;
// //     * Defina uma variável para o valor que o cliente pagou R$150,00;
// //     * Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

// const compra = 100.98;
// const pagamento = 150;

// const troco = pagamento - compra;

// console.log(`O valor do trco é ${troco.toFixed(2)}`);

// // 9. Você está na flor da idade?
// //     * Defina uma variável para o valor do ano do nascimento;
// //     * Defina uma variável para o valor do ano atual;
// //     * Defina uma variável que calcula o valor final da idade da pessoa;
// //     * Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

// const nascimento = input("Digite o ano de seu nascimento: ");
// const anoatual = new Date().getFullYear();
// let idade = anoatual - nascimento;

// console.log(`Você está na flor da idade com ${idade} anos`);


// // 10. Conversor de moedas: Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para:
// //     * DOLAR
// //     * EURO
// //     * LIBRA ESTERLINA
// //     * DÓLAR CANADENSE
// //     * PESO ARGENTINO
// //     * PESO CHILENO

// //     Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99

// const valorReal = input("Digite o valor para conversão: ");

// let dolar = valorReal * 0.19;
// let euro = valorReal * 0.16;
// let libraEsterlina = valorReal * 0.14;
// let dolarCanadense = valorReal * 0.24;
// let pesoArgentino = valorReal * 18.35;
// let pesoChileno = valorReal * 149.16;

// console.log(`${valorReal} reais equivale a ${dolar} dolar(es)`);
// console.log(`${valorReal} reais equivale a ${euro} euro(s)`);
// console.log(`${valorReal} reais equivale a ${libraEsterlina} dolar(es)`);
// console.log(`${valorReal} reais equivale a ${dolarCanadense} dolar(es) canadense`);
// console.log(`${valorReal} reais equivale a ${pesoArgentino} peso(s) argentino`);
// console.log(`${valorReal} reais equivale a ${pesoChileno} peso(s) chileno`);


// // 11. Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar: 
// //     * Crie uma variável para receber o valor, com conversão para int
// //     * Para um número ser par, a divisão dele por 2 tem que dar resto 0

// let num = parseInt(input("Digite um número: "));

// if ((num % 2) == 0) {
//     console.log("O número é par!");
// } else {
//     console.log("O número é ímpar");
// }


// 12. Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0, no prompt.

// let num = parseInt(input("Digite um número: "));

// if (num > 0) {
//     console.log("O número é positivo!");
// } else if (num < 0) {
//     console.log("O número é negativo!");
// } else {
//     console.log("O número é 0!");
// };

// 13. Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.

// const num1 = parseInt(input("Digite o primeiro número: "));
// const num2 = parseInt(input("Digite o segundo número: "));

// if (num1 > num2) {
//     console.log(`O ${num1} é maior que ${num2}.`);
// } else if (num2 > num1) {
//     console.log(`O ${num2} é maior que ${num1}.`);
// } else {
//     console.log("Os números são iguais");
// };


// 14. Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
//     * Se a nota for menor que 6.0, deve exibir a nota F.
//     * Se a nota for de 6.0 até 7.0, deve exibir a nota D.
//     * Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
//     * Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
//     * Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

// const nota = parseFloat(input("Digite a nota do aluno: "));

// if (nota < 6.0) {
//     console.log("Nota F");
// } else if (nota >= 6.0 && nota < 7.0) {
//     console.log("Nota D");
// } else if (nota >= 7.0 && nota < 8.0) {
//     console.log("Nota C");
// } else if (nota >= 8.0 && nota < 9.0) {
//     console.log("Nota B");
// } else if (nota >= 9.0) {
//     console.log("Nota A");
// };


// 15. Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     * salários até R$ 280,00 (incluindo) : aumento de 20%

//     * salários entre R\$ 280,00 e R$ 700,00 : aumento de 15%

//     * salários entre R\$ 700,00 e R$ 1500,00 : aumento de 10%

//     * salários de R$ 1500,00 em diante : aumento de 5%

//     Após o aumento ser realizado, informe na tela:

//     * o salário antes do reajuste;

//     * o percentual de aumento aplicado;

//     * o valor do aumento;

//     * o novo salário, após o aumento.

// const salario = parseFloat(input("Digite o salário do colaborador: "));

// if (salario <= 280) {
//     salarionovo = (salario * 0.2) + salario;
//     console.log(`O salário antes do reajuste era ${salario}.`);
//     console.log("Aumento de 20% aplicado.");
//     console.log(`O valor do aumento é de ${salario * 0.2} reais.`);
//     console.log(`O novo salário é ${salarionovo}`);
// } else if (salario > 280 && salario <= 700) {
//     salarionovo = (salario * 0.15) + salario;
//     console.log(`O salário antes do reajuste era ${salario}.`);
//     console.log("Aumento de 15% aplicado.");
//     console.log(`O valor do aumento é de ${salario * 0.15} reais.`);
//     console.log(`O novo salário é ${salarionovo}`);
// } else if (salario > 700 && salario <= 1500) {
//     salarionovo = (salario * 0.1) + salario;
//     console.log(`O salário antes do reajuste era ${salario}.`);
//     console.log("Aumento de 10% aplicado.");
//     console.log(`O valor do aumento é de ${salario * 0.1} reais.`);
//     console.log(`O novo salário é ${salarionovo}`);
// } else if (salario > 1500) {
//     salarionovo = (salario * 0.05) + salario;
//     console.log(`O salário antes do reajuste era ${salario}.`);
//     console.log("Aumento de 5% aplicado.");
//     console.log(`O valor do aumento é de ${salario * 0.05} reais.`);
//     console.log(`O novo salário é ${salarionovo}`);
// };


// 16. Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.





//17. Utilizando laço imprima a tabuada do 8 na tela.

//const numero = parseFloat(input("Você quer a tabuada de:  "));


// for (let i = 0; i <= 10; i++) {
//     total = 8 * i;
//     console.log(`8 x ${i} = ${total}`);
// };


// 18. Agora imprima todas as tabuadas do número 1 ao 10.
j = 0;
i = 0;
while (j < 10) {
    for (let i = 0; i <= 10; i++) {
        total = 8 * i;
    };
    console.log(`${j} x ${i} = ${total}`);
}

    


