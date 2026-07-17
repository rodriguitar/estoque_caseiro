const fs = require("fs");

const caminho = "./data/dados.json";

function carregarDados(){
    if(fs.existsSync(caminho)){
        const dados = JSON.parse(fs.readFileSync(caminho));
        return dados;
    }
    return { estoque: []};
}

function salvarDados(dados) {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
}

module.exports = { carregarDados, salvarDados};