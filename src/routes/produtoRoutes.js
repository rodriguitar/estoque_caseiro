const express = require("express"); //Importa a biblioteca

const router = express.Router(); // Uma mini aplicação especializada em produtos.

const produtoController = require("../controllers/produtoController"); // importa quem sabe responder as requisições.

router.get("/", produtoController.listar); // Entrega a função para o Express.

router.post("/", produtoController.criar);

module.exports = router; // Exporta o Router.