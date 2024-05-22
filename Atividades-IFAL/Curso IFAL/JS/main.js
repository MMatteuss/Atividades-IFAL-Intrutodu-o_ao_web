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

    /*
    var semana = 10;
    switch (semana) {
    case 1:
        document.write("Dom")
    break;
    case 2:
        document.write("Seg")
    break;
    case 3:
        document.write("Ter")
    break;
    case 4:
        document.write("Qua")
    break;
    case 5:
        document.write("Qui")
    break;
    case 6:
        document.write("Sex")
    break;
    case 7:
        document.write("Sab")
    break;
    default:
        document.write(`Semana não encontrado ${semana}`)
    }
    */

    /*
    let x, y, op
    x = Number(prompt("Digite o primeiro valor"))
    op = prompt("Digite um operação ")
    y = Number(prompt("Digite o segundo valor"))

    switch(op){
        case '+':
            document.write("Soma: "+ (x+y))
        break;
        case '-':
            document.write("Subtração: "+ (x-y))
        break;
        case '*':
            document.write("Multiplicação: "+ (x*y))
        break;
        case '/':
            document.write("Divisão: "+ (x/y))
        break;
        default:
            document.write(`${op}`)
        break;
    }
    */

    /*
    var v = [5]
    for(let i=0; i<5; i++){
        let name 
        v[i] = i
    }
    for(i=0; i<5; i++){
        document.write(`${v[i]}`)
    }
    */

    /*
    var v = [5][2]
    for(let i=0; i<5; i++){
        for(let l=0; l<5; l++){
        v[i] = i
    }
    for(i=0; i<5; i++){
        document.write(`${v[i]}`)
    }
    */

    /*
    var i, soma =0
    var altura = new Array() //uma forma de fazer vetor
    var valor =[] //outra forma de fazer vetor

    var nota1 = []
    var nota2 = []
    var nota3 = []
    */

    /*
    var altura = new Array()

    altura [0] = 1.7
    altura [1] = 1.85

    altura [2] = prompt("Digite um valor para a posição 2")

    altura [3] = 1.63

    altura [4] = prompt("Digite um valor para a posição 4")

    document.write(`${altura[3]}`)
    //for(let i =0; i<=4; i++){
    //	document.write(`${altura[i]} <br>`)
    //}
    */

    /*
    var sorteio = []

    for(let i=0; i<7; i++){
        sorteio[i] = Math.floor(Math.random()*101)
    }
    alert(sorteio.toString()+"\n\n" + sorteio.join(" - "))
    */

    /*
    function mensagem(){
        document.write("Teste")
    }
    mensagem()
    */

    /*
    x = Number(prompt("Digite o primeiro valor"))
    operacao = (prompt("Digite o operador"))
    y = Number(prompt("Digite o segundo valor"))
    calcular(x, operacao, y)
    function calcular(num1, op, num2){
        switch(op){
            case '+':
                document.write("Soma: "+ (x+y))
            break;
            case '-':
                document.write("Subtração: "+ (x-y))
            break;
            case '*':
                document.write("Multiplicação: "+ (x*y))
            break;
            case '/':
                document.write("Divisão: "+ (x/y))
            break;
            default:
                document.write(`${op}`)
            break;
        }
    }
    */
function parOuImpa(numero){
	if(numero %2 ==0){
    	document.write("Par")
    }else{
    	document.write("Impar")
    }
}
parOuImpa(prompt("Digite um valor"))


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
