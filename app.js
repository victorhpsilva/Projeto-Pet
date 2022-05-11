const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const produtosRotas = require("./Rotas/produtosRotas")
const clientesRotas = require("./Rotas/clientesRotas")
const animaisRotas = require("./Rotas/animaisRotas")
const pedidosRotas = require("./Rotas/pedidosRotas")
const itensPedidosRotas = require("./Rotas/itensPedidosRotas")
const fornecimentosRotas = require("./Rotas/fornecimentosRotas")
const fornecedoresRotas = require("./Rotas/fornecedoresRotas")
const entregadoresRotas = require("./Rotas/entregadoresRotas")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/produtos", produtosRotas)
app.use("/clientes", clientesRotas)
app.use("/animais", animaisRotas)
app.use("/pedidos", pedidosRotas)
app.use("/itensPedidos", itensPedidosRotas)
app.use("/fornecimentos", fornecimentosRotas)
app.use("/fornecedores", fornecedoresRotas)
app.use("/entregadores", entregadoresRotas)

app.use((req, res, next) => {
    const erro = new Error ("Rota não encontrada")
    erro.status = 404;
    next(erro);
})
app.use((error, req, res, next) =>{
    res.status(error.status || 500)
    return res.send({
        erro: {
            message: error.message 
        }
    })
})

module.exports = app;