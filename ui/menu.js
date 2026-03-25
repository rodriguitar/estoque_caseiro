const readline = require ("readline");
const { adicionarItem } = require("../services/estoqueServece");
const { salvarDados, carregarDados } = require ("../services/fileService");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dados = carregarDados();

function iniciarMenu() {
    console.log("\n=== MENU ===");
    console.log("1 - Adicionar item");

    rl.question("Escolha: ", (opcao) => {
        if(opcao === "1"){
            rl.question("Nome: ", (nome) => {
                rl.question("Quantidade:", (qtd) =>{

                    dados.estoque = adicionatItem(dados.estoque, nome, Number(qtd));

                    salvarDados(dados);
                    iniciarMenu();
                });
            });
        }
    });
}

module.exports = { iniciarMenu };