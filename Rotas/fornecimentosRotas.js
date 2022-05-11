const express = require ("express");
const { send } = require ("express/lib/response");
const rotas = express.Router();
const fornecimentosController = require ("../Controllers/fornecimentos")

rotas.get("/", (req, res, next) =>{
    fornecimentosController.getAll (req, res)
});

rotas.post("/", (req, res, next) =>{
    fornecimentosController.create(req, res)
});

rotas.get("/:fornecimentoID", (req, res, next) =>{
    const id = req.params.fornecimentoID
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    }else {
        res.status(200).send({
            message: "Fornecimento específico"
        })
    }
})

rotas.patch("/:id", (req, res, next)=> {
    fornecimentosController.update(req, res)
});

rotas.delete("/:id", (req, res, next) =>{
    fornecimentosController.delete(req, res)
})

module.exports = rotas;