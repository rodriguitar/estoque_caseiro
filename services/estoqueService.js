function adicionarItem(estoque, nome, quantidade){
    const nomeFormatado = nome.toLower().trim();

    const item = estoque.find(i => i.nome === nomeFormatado);

    if(item){
        item.quantidade += quantidade;
    } else {
        estoque.push({nome: nomeFormatado, quantidade});
    }

    return estoque;
}

module.exports = { adicionarItem };