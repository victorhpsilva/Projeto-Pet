const express = require ("express");
const { send } = require ("express/lib/response");
const rotas = express.Router();
const produtosController = require ("../Controllers/produtos")

rotas.get("/", (req, res, next) =>{
    produtosController.getAll(req,res)
})

rotas.post("/", (req, res, next) =>{
    produtosController.create(req,res)
})

rotas.get("/:produtoID", (req, res, next) =>{
    const id = req.params.produtoID
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    }else {
        res.status(200).send({
            message: "Produto específico"
        })
    }
})

rotas.patch("/:id", (req, res, next)=> {
    produtosController.update(req,res)
})

rotas.delete("/:id", (req, res, next) =>{
    produtosController.delete(req,res)
})

module.exports = rotas; 