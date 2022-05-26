//Exercicio 1
//a)
// let minhaString: string = 4; //erro
//b)
let meuNumero: number | string = 4;
//c)

let meuObjeto: { nome: string, corFavorita: string, idade: number } = {
    nome: "João",
    corFavorita: "azul",
    idade: 25
}; 

type Pessoa = {
    nome: string,
    corFavorita: string,
    idade: number
}


let meuObjeto2: Pessoa = {
    nome: "Maria",
    corFavorita: "verde",
    idade: 25
};

let meuObjeto3: Pessoa = {
    nome: "Pedro",
    corFavorita: "vermelho",
    idade: 25
};

let meuObjeto4: Pessoa = {
    nome: "Joana",
    corFavorita: "amarelo",
    idade: 25
};

//d)
enum Cor {
    Vermelho,
    Verde,
    Azul,
    Amarelo
}
let minhaCor: Cor = Cor.Vermelho;

let meuObjeto5: Pessoa = {
    nome: "Davi",
    corFavorita: Cor[minhaCor],
    idade: 25
};

//Exercicio 2
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([50,345,67,234,678,1,235]))


//c)


//Exercicio 3
//a)
const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  type Post = {
    autor: string,
    texto: string
    }

    //b)
    function buscarPostsPorAutor(posts: Post[], autorInformado: string) {
        return posts.filter(
          (post) => {
            return post.autor === autorInformado
          }
        )
      }