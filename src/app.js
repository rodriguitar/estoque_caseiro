const express = require("express");

const produtoRoutes = require("./routers/produtoRouters");

const app = express();

app.use(express.json());

app.use("/produtos", produtoRoutes);

app.get("/", (req, res) =>{
    res.send("API de Estoque funcionando 🚀");
});

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000");
});