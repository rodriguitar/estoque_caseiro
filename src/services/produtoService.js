let produtos = [];
let idAtual = 1;

exports.listar = () => {
    return produtos;
};

exports.criar = (produto) => {
    if (!produto.nome || typeof produto.nome !== "string" || produto.nome.trim() === ""){
        throw new Error ("Nome é obrigatório e deve ser um texto válido");
    }

    if (produto.quantidade !== undefined && typeof  produto.quantidade !== "number") {
        throw new Error ("Quantidade deve ser um número");
    }

    if (produto.quantidade !== undefined && produto.quantidade < 0){
        throw new Error ("Quantidade não pode ser negativa")
    }

    const novoProduto = {
        id: idAtual++,
        nome: produto.nome,
        quantidade: produto.quantidade || 0,
        quantidadeIdeal: produto.quantidadeIdeal || 0,
    };

    produtos.push(novoProduto);

    return novoProduto;
};