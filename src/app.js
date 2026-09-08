const express = require("express");
const app = express();

const produtoRoutes = require("./routes/produtoRoutes");

app.use(express.json());

app.use("/produtos", produtoRoutes);

app.get("/", (req, res) =>{
    res.send("API de Estoque funcionando 🚀");
});

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000");
});