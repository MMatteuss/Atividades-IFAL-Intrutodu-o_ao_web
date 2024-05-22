// main.js
function minhaFuncao() {
    return "Olá, mundo!"
}

// alert("Ola, mundo");
// confirm("Ola, mundo"); 


// var nome = "";
// do{
//     nome = prompt("Digite seu nome");
//     switch(nome){
//         default:
//             alert("E para você digitar seu nome!");    
//         break;

//         // case 
//     }
// }while(nome == nome.default || nome == Number)

// if(nome != ""){
//     alert("Ola, "+nome);
// }


 /*
    var raiz = prompt("Digite numero")
    alert("o dobro é " + Math.sqrt(raiz))
    */
    
    /*
    var a, b;
    var altura;
    var  NOME;
    a = 3
    b = -6
    altura = 1.72
    NOME = "Maria"
    alert("Nome "+NOME+" | Altura: "+altura+" | a: "+a+" | b: "+b)
    alert('Nome ${NOME} | Altura: ${altura} | a: ${a} | b: ${b}')
    */
    
    /*
    var nome = prompt("Digite o seu nome:")
    alert("Ola "+nome)
    */
    
    /*
    var num1 = Number(prompt("Digite numero 1º"));
    var num2 = Number(prompt("Digite numero 2º"));
    alert(num1+" + "+num2+" = "+(num1+num2));
    */
    
    /*
    let idade = prompt("Digite a sua idade")
    if(idade >= 18){
        alert("Você é maior de idade!")
    }else{
        alert("Você é menor de idade!")
    }
    */
    
    /*
    var nome = prompt("Digite o nome do aluno:")
    let media = prompt("Digite a media:")
    
    if(media >= 7){
        alert("O aluno "+nome+", aprovado")
    }
    else{
        alert("O aluno "+nome+", reprovado")
    }
    */
    
    /*
    for(let i=0;i<5;i++){
        alert(i)
    }
    
    let i =0
    
    while(i<5){
        alert(i)
        i++
    }
    
    i=0
    do{
        alert(i)
        i++
    }while(i<5)
    */
    
    /*
    document.write("<p>20 a 50:</p>")
    for(let i = 20; i<=50; i++){
        document.write(" "+i)
    }
    
    document.write("<br><br>")
    
    document.write("<p>50 a 20:</p>")
    for(i = 50; i>=20; i--){
        document.write(" "+i)
    }
    */


// CADASTRAR
const cars = [];
var contador = 0;
var nomeCarro = "";
var passou = Boolean;
var p = "";

contador = prompt("Digite o valor de Contador: ");

for(let i=0;i<contador; i++){
    switch(cars[i]){
        default:
            Pergunta();
            cars[i] = nomeCarro;   
        break;
    }
    passou = true
}

function Pergunta(){
    nomeCarro = prompt("Digite o Nome do veiculo: ");
}

function teste(){
    // if(passou == true){
    //     for(let i=0;i<contador; i++){
    //         p = i," - ", cars[i];
    //         return p
    //     }
    // }    
    return "Ola";
}
