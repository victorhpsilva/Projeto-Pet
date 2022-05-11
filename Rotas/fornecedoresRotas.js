const express = require ("express");
const { send } = require ("express/lib/response")
const rotas = express.Router();
const fornecedoresController = require ("../Controllers/fornecedores")

rotas.get("/", (req, res, next) =>{
    fornecedoresController.getAll(req, res) 
});

rotas.post("/", (req, res, next) =>{
    fornecedoresController.create(req, res)
});

rotas.get("/:fornecedoresID", (req, res, next) =>{
    const id = req.params.fornecedoresID
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    }else {
        res.status(200).send({
            message: "Fornecedores específico"
        })
    }
})

rotas.patch("/:id", (req, res, next)=> {
    fornecedoresController.update(req, res)
});

rotas.delete("/:id", (req, res, next) =>{
    fornecedoresController.delete(req, res)
})

module.exports = rotas;