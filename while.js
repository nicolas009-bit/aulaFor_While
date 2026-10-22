// lacos de repetição

// while(enquanto) usado quando vc nao tem certeza de quantas vezes vai repetir



var num = 1
// console.log("nicolas")


//opção 1
// while(num <= 15){
//     console.log(num)
//     num = num + 1
    
// }

//opção 2

// while(true){
//     console.log(" ja " + num)
//     if (num == 5){
//         break
//     }
//     num = num + 1
// }

//atividade

while(num <= 15){
    console.log("nicolas pataro "+ num)
    num = num + 1
    
}

var numUsuario = 5
var numTabuada = 1
var res = 0
var quantidadeRepeticao = 15

while(numTabuada <= quantidadeRepeticao){
    res = numUsuario * numTabuada
    console.log(numUsuario +" X "+numTabuada + " = " + res);
    numTabuada = numTabuada + 1
    
}


//do while,  valida antez do laço

var i = 0
do{
    console.log("meu nome e Nicolas Pataro " + i);
    i++
    
} while(i <= 15)



