const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const Animais = require ("../Models/animais")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const animais = await Animais(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(animais)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await Animais(sequelize, Sequelize.DataTypes).create({
            nome_animal: req.body.nome_animal,
            idade_animal: req.body.idade_animal,
            id_cliente: req.body.id_cliente,
            especie_animal: req.body.especie_animal
        })
        res.status(200).send({
            message: "Animal cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Animais(sequelize, Sequelize.DataTypes).update({
            nome_animal: req.body.nome_animal,
            idade_animal: req.body.idade_animal,
            cod_cliente: req.body.cod_cliente,
            especie: req.body.especie
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Animal atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Animais(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        
        }
        );
        res.status(200).send("Animal deletado com sucesso!")
    }
    
}  