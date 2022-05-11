const express = require ("express");
const { send } = require("express/lib/response")
const rotas = express.Router()
const clientesController = require ("../Controllers/clientes")

rotas.get("/", (req, res, next) =>{
    clientesController.getAll(req, res)
});

rotas.post("/", (req, res, next) =>{
    clientesController.create(req, res)
});

rotas.get("/:clienteID", (req, res, next) => {
    const id = req.params.clienteId
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    } else {
        res.status(200).send({
            message: "Cliente específico"
        })
    }
});

rotas.patch("/:id", (req, res, next)=> {
    clientesController.update(req, res)
});

rotas.delete("/:id", (req, res, next) =>{
    clientesController.delete(req, res)
})

module.exports = rotas;