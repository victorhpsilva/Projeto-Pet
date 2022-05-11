const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const Entregadores = require ("../Models/entregadores")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const entregadores = await Entregadores(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(entregadores)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await Entregadores(sequelize, Sequelize.DataTypes).create({
                nome_entregador: req.body.nome_entregador,
                telefone_entregador: req.body.telefone_entregador,
                id_pedidos: req.body.id_pedidos
        })
        res.status(200).send({
            message: "Entregador cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Entregadores(sequelize, Sequelize.DataTypes).update({
                nome_entregador: req.body.nome_entregador,
                telefone_entregador: req.body.telefone_entregador,
                id_pedidos: req.body.id_pedidos
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Entregador atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Entregadores(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        
        }
        );
        res.status(200).send("Entregadores deletado com sucesso!")
    },
    
}