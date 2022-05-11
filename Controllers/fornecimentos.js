const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const Fornecimentos = require ("../Models/fornecimentos")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const fornecimentos = await Fornecimentos(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(fornecimentos)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await Fornecimentos(sequelize, Sequelize.DataTypes).create({
            data_fornecido: req.body.data_fornecido,
            qntd_produto: req.body.qntd_produto,
            id_produtos: req.body.id_produtos,
            id_fornecedores: req.body.id_fornecedores
        })
        res.status(200).send({
            message: "Fornecimentos cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Fornecimentos(sequelize, Sequelize.DataTypes).update({
            data_fornecido: req.body.data_fornecido,
            qntd_produto: req.body.qntd_produto,
            id_produtos: req.body.id_produtos,
            id_fornecedores: req.body.id_fornecedores
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Fornecimento atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Fornecimentos(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        
        }
        );
        res.status(200).send("Fornecimento deletado com sucesso!")
    }
    
}