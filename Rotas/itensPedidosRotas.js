const express = require ("express");
const { send } = require ("express/lib/response");
const rotas = express.Router();
const itensPedidosController = require ("../Controllers/itensPedidos")

rotas.get("/", (req, res, next) =>{
    itensPedidosController.getAll(req, res)
});

rotas.post("/", (req, res, next) =>{
    itensPedidosController.create(req, res)
});

rotas.get("/:itemPedidoId", (req, res, next) =>{
    const id = req.params.itemPedidoId
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    }else {
        res.status(200).send({
            message: "Item Pedido específico"
        })
    }
})

rotas.patch("/:id", (req, res, next)=> {
    itensPedidosController.update(req, res)
});

rotas.delete("/:id", (req, res, next) =>{
    itensPedidosController.delete(req, res)
});

module.exports = rotas;