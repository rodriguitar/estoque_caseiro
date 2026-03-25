// Aplicação de estoque caseiro onde você poderá organizar o que tem no seu armário

const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//"Banco de dados"
const estoque = [];
const estoqueIdeal = [];
const listaCompras = [];

function salvarDados() {
    const dados = {
        estoque: estoque,
        ListaCompras: ListaCompras
    };

    fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));
}

function carregarDados() {
    if (fs.existsSync("dados.json")) {
        const dados = JSON.parse(fs.readFileSync("dados.jason"));

        estoque.push (...dados.estoque);
        listaCompras.push(...dados.listaCompras);
    }
}
//=============== MENU ===============
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
            case "4":
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
                menu();
        }
    })
}


function verEstoque(){
    console.log ("\n=== ESTOQUE ===");

    if(estoque.length === 0){
        console.log("Estoque vazio.");
    } else {
        estoque.forEach((item, index) =>{
            console.log('${index + 1}. ${item.nome} - ${item.quantidade}');
        });
    }

    menu();
}

function adicionarItem(){
    rl.question("Nome do item: ", (nome) =>{
        rl.question("Quantidade: ", (quantidade) =>{

            const nomeFormatado = nome.toLowerCase().trim();
            const quantidadeNumero = Number(quantidade);

            if (isNaN(quantidadeNumero) || quantidadeNumero <= 0){
                console.log("Quantidade inválida!");
                return menu();
            }

            //procura item já existente
            const itemExistente = estoque.find(
                (item) => item.nome === nomeFormatado
            );

            if(itemExistente){
                //se exixtir, soma a quantidade
                itemExistente.quantidade += quantidadeNumero;

                console.log('Quantidade atualizada: ${itemExistente.nome} agora tem ${itemExistente.quantidade}');
            }else{
                //se não existir, cria novo item
                const novoItem = {
                    nome: nomeFormatado,
                    quantidade: quantidadeNumero
                };
                    estoque.push(novoItem);
                    console.log('Item "${nomeFormatado}" adicionado com sucesso!');
            }
            salvarDados();
            menu();
        });
    });

}

function acabouItem(){
    rl.question("Nome do item que acabou: ", (nome) =>{
        rl.quention("Quantidade que acabou: ", (quantidade) =>{

            const nomeFormatado = nome.toLowerCase().trim();
            const quantidadeNumero = Number(quantidade);

            if(isNaN(quantidadeNumero) || quantidadeNumero <= 0) {
                console.log("Quantidade inválida!");
                return menu();
            }

            const itemExistente = estoque.find(
                (item) => item.nome === nomeFormatado
            );

            if (!itemExistente) {
                console.log("Item não encontrado no estoque.");
                return menu();
            }

            itemExistente.quantidade -= quantidadeNumero;

            if (itemExistente.quantidade <= 0) {
                console.log('${nomeFormatado} acabou! Adicionado à lista de compras.');
            }
        });
    });
    salvarDados();
    menu();
}

function verListaCompras(){
   console.log("\n=== LISTA DE COMPRAS ===");

   if(listaCompras.length === 0){
    console.log("Nada para comprar.");
   } else {
    listaCompras.forEach((item, index) => {
        console.log('${index + 1}. ${item.nome} - ${item.quantidade}');
     });
    }
    menu();
}

function definirEstoqueIdeal(){
    console.log("Função ainda não implementada");
    menu();
}

carregarDados();
menu();