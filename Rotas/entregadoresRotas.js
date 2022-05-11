const express = require ("express");
const { send } = require ("express/lib/response");
const rotas = express.Router();
const entregadoresController = require ("../Controllers/entregadores")

rotas.get("/", (req, res, next) =>{
    entregadoresController.getAll(req, res)
    });

rotas.post("/", (req, res, next) =>{
    entregadoresController.create(req, res)
});

rotas.get("/:entregadoresId", (req, res, next) =>{
    const id = req.params.entregadoresId
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    } else {
        res.status(200).send({
            message: "Entregadores específico"
        })
    }
})

rotas.patch("/:id", (req, res, next)=> {
    entregadoresController.update(req, res)
});

rotas.delete("/:id", (req, res, next) =>{
    entregadoresController.delete(req, res)
})

module.exports = rotas;