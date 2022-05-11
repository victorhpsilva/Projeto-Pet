const express = require ("express")
const { send } = require("express/lib/response")
const rotas = express.Router()
const animaisController = require ("../Controllers/animais")

rotas.get("/", (req, res, next) =>{
    animaisController.getAll(req,res)
});

rotas.post("/", (req, res, next) =>{
    animaisController.create(req,res)
});

rotas.get("/:animalID", (req, res, next) =>{
    const id = req.params.animalID
    
    if(id === "especifico"){
        res.status(200).send({
            message: "Id específico",
            id: id
        })
    } else { 
        res.status(200).send({
            message: "Animal específico"
        })
    }  
}); 

rotas.patch("/:id", (req, res, next)=> {
    animaisController.update(req,res)
});

rotas.delete("/:id", (req, res, next) =>{
    animaisController.delete(req,res)
})

module.exports = rotas; 