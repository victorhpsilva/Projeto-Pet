const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const Produtos = require ("../Models/produtos")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(produtos)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await Produtos(sequelize, Sequelize.DataTypes).create({
                nome_produto: req.body.nome_produto,
                descricao_produto: req.body.descricao_produto,
                valor_unitario: req.body.valor_unitario
        })
        res.status(200).send({
            message: "Produto cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Produtos(sequelize, Sequelize.DataTypes).update({
            nome_produto: req.body.nome_produto,
            descricao_produto: req.body.descricao_produto,
            valor_unitario: req.body.valor_unitario
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Produtos atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Produtos(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        
        }
        );
        res.status(200).send("Produtos deletado com sucesso!")
    },
    
} 