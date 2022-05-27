//Exercicio 1
function strFrase(name:string,  dia:number, mes:number, ano:number):string{ 
    return `Olá, me chamo ${name}, nasci em ${dia}/${mes}/${ano}`;
}

console.log(strFrase("João", 10, 10, 2000));


//Exercicio 2
function typeOf(param:any):string {
    return typeof param;
}


console.log(typeOf(10));


//Exercicio 3
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


function catalogoFilmes(nome:string, anoLancamento:number, genero:GENERO, pontuacao?:number):string{
    return`{nome: ${nome}, anoLancamento: ${anoLancamento}, genero: ${genero}, pontuacao: ${pontuacao}}`;
}
  
console.log(catalogoFilmes("Avengers", 2018, GENERO.ACAO, 8));


//Exercicio 4
const array1 = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function funcionariosPresencial(array:any[]):any[]{
    return array.filter(funcionario => funcionario.presencial === true);
}


console.log(funcionariosPresencial(array1));


//Exercicio 5
const array2 =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function funcionariosAdmin(array:any[]):any[]{
    return array.filter(funcionario => funcionario.role === "admin");
}


console.log(funcionariosAdmin(array2));