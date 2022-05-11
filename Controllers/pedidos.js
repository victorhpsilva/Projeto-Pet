const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const Pedidos = require ("../Models/pedidos")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const pedidos = await Pedidos(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(pedidos)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await Pedidos(sequelize, Sequelize.DataTypes).create({
            qtd_item: req.body.qtd_item,
            item_pedido: req.body.item_pedido,
            valor_pedido: req.body.valor_pedido,
            data_pedido: req.body.data_pedido,
            id_cliente: req.body.id_cliente
        })
        res.status(200).send({
            message: "Pedido cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Pedidos(sequelize, Sequelize.DataTypes).update({
            qtd_item: req.body.qtd_item,
            item_pedido: req.body.item_pedido,
            valor_pedido: req.body.valor_pedido,
            data_pedido: req.body.data_pedido,
            cod_cliente: req.body.cod_cliente
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Pedido atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Pedidos(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        
        }
        );
        res.status(200).send("Pedido deletado com sucesso!")
    }
    
}