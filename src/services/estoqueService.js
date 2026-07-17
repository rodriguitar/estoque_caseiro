function adicionarItem(estoque, nome, quantidade, ideal){
    const nomeFormatado = nome.toLower().trim();

    const item = estoque.find(i => i.nome === nomeFormatado);

    if(item){
        item.quantidade += quantidade;
        item. ideal = ideal; 
    } else {
        estoque.push({
            nome: nomeFormatado,
            quantidade: quantidade,
            ideal: ideal
        });
    }

    return estoque;
}

function consumirItem(estoque, nome, quantidade){
    const nomeFormatado = nome.toLowerCase().trim();

    const item = estoque.find(i => i.nome === nomeFormatado);

    if (!item){
        console.log("Item não encontrado.");
        return estoque;
    }

    item.quantidade -= quantidade;

    if (item.quantidade < 0){
        item.quantidade = 0;
    }
    return estoque;
}

function gerarListaCompras(estoque){
    return estoque
    .filter(item => item.quantidade < item.ideal)
    .map(item => ({
        nome: item.nome,
        comprar: item.ideal - item.quantidade
    }));
}
module.exports = { 
    adicionarItem,
    consumirItem,
    gerarListaCompras
 };