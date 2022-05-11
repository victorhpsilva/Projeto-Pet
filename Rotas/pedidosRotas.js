const express = require ("express");
const { send } = require ("express/lib/response");
const rotas = express.Router();
const pedidosController = require ("../controllers/pedidos")

rotas.get("/", (req, res, next) =>{
    pedidosController.getAll(req, res)
});

rotas.post("/", (req, res, next) =>{
    pedidosController.create(req, res)
})

rotas.get("/:pedidoID", (req, res, next) =>{
    const id = req.params.pedidoID
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    }else {
        res.status(200).send({
            message: "Pedido específico"
        })
    }
})

rotas.patch("/:id", (req, res, next)=> {
   pedidosController.update(req, res) 
});

rotas.delete("/:id", (req, res, next) =>{
    pedidosController.delete(req, res)
})

module.exports = rotas;