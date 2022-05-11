const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const ItensPedidos = require ("../Models/itensPedidos")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const itensPedidos = await ItensPedidos(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(itensPedidos)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await ItensPedidos(sequelize, Sequelize.DataTypes).create({
            qtd_itens: req.body.qtd_itens,
            valor_parcial: req.body.valor_parcial,
            id_produtos: req.body.id_produtos,
            id_pedidos: req.body.id_pedidos
        })
        res.status(200).send({
            message: "Item cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await ItensPedidos(sequelize, Sequelize.DataTypes).update({
            qtd_itens: req.body.qtd_itens,
            valor_parcial: req.body.valor_parcial,
            id_produtos: req.body.id_produtos,
            id_pedidos: req.body.id_pedidos
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Item atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await ItensPedidos(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        
        }
        );
        res.status(200).send("Item deletado com sucesso!")
    }
    
}