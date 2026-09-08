const produtoService = require("../services/produtoService");

// Lista todos os produtos
exports.listar = (req, res) => {
    try {
        const produtos = produtoService.listar();

        res.status(200).json({
            sucesso: true,
            dados: produtos
        });
    } catch (error){
        res.status(500).json({
            sucesso: false,
            erro: "Erro ao listar produtos"
        });
    }
};

// Cria um novo produto
exports.criar = (req, res) => {
    try{
        const produto = req.body;

        const novoProduto = produtoService.criar(produto);

        res.status(201).json({
            sucesso: true,
            dados: novoProduto
        });
    } catch (error) {
        res.status(400).json({
            sucesso: false,
            erro: error.message
        });
    }
};