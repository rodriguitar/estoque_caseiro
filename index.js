// Aplicação de estoque caseiro onde você poderá organizar o que tem no seu armário

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const estoque = [];
const estoqueIdeal = [];
const listaCompras = [];

function menu(){
    console.log("\n === CONTROLE DE ESTOQUE DOMÉSTICO ===");
    console.log("1 - Ver estoque");
    console.log("2 - Adicionar Item");
    console.log("3 - Acabou Item");
    console.log("4 - Lista de compras");
    console.log("5 - Definir estoque ideal");
    console.log("6 - Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        switch(opcao){
            case "1":
                verEstoque();
                break;
            case "2":
                adicionarItem();
                break;
            case "3":
                acabouItem();
                break;
            case"4":
                verListaCompras(); 
                break;
            case "5":
                definirEstoqueIdeal();
                break;
            case "6":
                rl.close();
                break;
            default:
                console.log("Opção inválida");
        }
    })
}


function verEstoque(){
    console.log("Vizualizando estoque...");
    menu();
}

function adicionarItem(){
    console.log("Adicionar Item...");
    menu();

}

function acabouItem(){
    console.log("Item Acabou...");
    menu();
}

function verListaCompras(){
    console.log("Lista de compras...");
    menu();
}

function definirEstoqueIdeal(){
    console.log("Definir estoque ideal...");
    menu();
}

menu();