const readline = require ("readline");
const { adicionarItem, consumirItem, gerarListaCompras } = require("../services/estoqueServece");
const { salvarDados, carregarDados } = require ("../services/fileService");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dados = carregarDados();

function iniciarMenu() {
    console.log("\n=== MENU ===");
    console.log("1 - Adicionar item");
    console.log("2 - Consumir item");
    console.log("3 - Ver lista de compras");

    rl.question("Escolha: ", (opcao) => {
        if(opcao === "1"){
            rl.question("Nome: ", (nome) => {
                rl.question("Quantidade:", (qtd) =>{
                    rl.question("Quantidade ideal: ", (ideal) => {
                        dados.estoque = adicionarItem(
                            dados.estoque,
                            nome,
                            Number(qtd),
                            Number(ideal)
                        );

                        salvarDados(dados);
                        iniciarMenu();
                    });

                });
            });
        }

        else if(opcao === "2"){
            rl.question("Nome: ", (nome) =>{
                rl.question("Quantidade a consumir: ",(qtd) =>{

                    dados.estoque = consumirItem(
                        dados.estoque,
                        nome,
                        Number(qtd)
                    );

                    salvarDados(dados);
                    iniciarMenu();
                });
            });
        }

        else if(opcao === "3"){
            const lista = gerarListaCompras(dados.estoque);

            console.log("\n=== LISTA DE COMPRAS ===");

            if(lista.length === 0) {
                console.log("nada para comprar.");
            } else {
                lista.forEach(item => {
                    console.log('${item.nome} - comprar ${item.comprar}');
                });
            }

            iniciarMenu();
        }

        else {
            console.log("opção inválida.");
            iniciarMenu();
        }
    });
}

module.exports = { iniciarMenu };