
var sobrenome = ["Guilherme, Geovana, Sued, Ferreira"];
var s = 0;


while( s <= 3){

    console.log(sobrenome[s]);
    s++;
}


var linguagens = ["Java, ruby, c, Phyton"];
var lin = 0;

while (0<= 4){
console.log(linguagens[lin]);
    lin++;
}



var loteamento = [1, 2, 3, 4, 5];
var lot = 0;

while(lot < 5){

    console.log(loteamento[lot]);
    lot++;
}


// 

 Esse código em JavaScript percorre e imprime cada elemento do array loteamento usando um loop while. Aqui está o código executado:


var loteamento = [1, 2, 3, 4, 5];
var lot = 0;

while(lot < 5){
    console.log(loteamento[lot]);
    lot++;
}

A saída deste código será:

Copiar código
1
2
3
4
5

Explicando o que acontece passo a passo:

var loteamento = [1, 2, 3, 4, 5]; - Define um array chamado loteamento com cinco números.

var lot = 0; - Inicializa uma variável lot com o valor 0, que será usada como índice para percorrer o array.

while(lot < 5){ - Inicia um loop while que continua enquanto o valor de lot for menor que 5.

console.log(loteamento[lot]); - Imprime o valor do array loteamento na posição lot.

lot++; - Incrementa o valor de lot para que na próxima iteração do loop seja impresso o próximo elemento do array.
O loop while percorre cada elemento do array loteamento e imprime seu valor no console. 
