/* Faça um programa para calcular o valor de uma viagem.


Voçê tera 5 variaveis. sendo elas:
    - 1 Preço do etanol;
    - 2 Preço da gasolina; 
    - 3 Tipo de combustivel que esta no seu carro;
    - 4 Valor médio de gasto do carro;
    - 5 Distância em Km ;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.*/

console.log('Olá, seja bem vindo ao calculo de custo em combustivél.');



const precoE = 4.42;
const precoG = 5.14;
let kmpLitros = 10;
let distanciaKM = 1200;
const tipoCombustivel = 'Etanol';
const tipo2Combustivel = 'Gasolina';

let gastoCombustivel = distanciaKM / kmpLitros;

if (tipoCombustivel === 'Etanol') {
    let valorGasto = gastoCombustivel * precoE;
    console.log('Preço gasto etanol')
    console.log(valorGasto.toFixed(2));


} else (tipo2Combustivel === 'Gasolina')
{
    console.log('Preço gasto gasolina')
    let valorGasto = gastoCombustivel * precoG;
    console.log(valorGasto.toFixed(2));

}







