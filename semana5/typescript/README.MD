# Typescript

## Como executar:
- Entra na psta do arquivo a ser executado
- Crie o arquivo tscofig com o comando tsc --init
- Ctrl + shift + B > selecione o build e o arquivo recém criado
- depois só digitar node + nomedo arquivo

## Type Annotations
Serve para verificação do tipo de variáveis

### Variáveis
{
    let nome: string = "Glaúcia Lemos";
}

### Arrays
{
    let animais: string[] = ["Elefante", "Cachorro", "Gato","Panda"];
}

### Objeto
{
    let carro: {
        nome: string;
        ano: number;
        preco: number
    };
}

{
    carro = { nome: "Toyota Yaris Sedan XS", ano: 2019, preco: 80000 }
}


## boolean

- OBS.: Boolean(object) != boolean(primitivo)

### Exemplo 1:

{
    let tarefaConcluida: boolean = true;
    let tarefaPendente: boolean = false;
    
    console.log(tarefaConcluida); //true
    console.log(tarefaPendente); //false
}

### Exemplo 2:

{
    let concluida: boolean = false;

    if (concluida) {
        console.log("A tarefa foi concluida.");
    } else {
        console.log("A tarefa está pendente.");
    }
    // A tarefa está pendente.
}

## number && bigint(para números grandes)

- OBS.: Number(object) != number(primitivo)

{
    23 Ponto Flutuante ==> let num1: number = 23.0;
    30927 Hexadecimal ==> let num1: number = 0x78CF;
    383 Octal ==> let num1: number = 0o577;
    49 Binário ==> let num1: number = 0b110001;
}

{
    ==> let num1: bigint = 900015854756965200525n;
    Hexadecimal ==> let num1: bigint = big3;
    Octal ==> let num1: bigint = big4;
    Binário ==> let num1: bigint = big2;
}

### Funções
{
    function multiplicar(num1: number, num2: number) {
        return num1 * num2;
    }
}

## Tuplas
Representam uma estrutura de dados simples parecida com um Array. A grande diferença entra as duas é que nos array’s nós trabalhamos somente com um tipo de dado e com as tuplas com diferentes tipos.

{
    type PairStrings = [string, string]

    type PairStringNumber = [string, number]

    type Pair<T1, T2> = [type: T1, type: T2]

    type PairStringNumber2 = Par<string, number>

    type Triple<T1, T2, T3> = [T1, T2, T3]
    const tripleStrings: Triple<string, string, string> = ["", "", ""]

    type StrigsthenNumber = [...string[], number]
    const strigsthenNumber: StrigsthenNumber = ["a", "b", 1]

    type ReadonlyTuple = [string, number]
}