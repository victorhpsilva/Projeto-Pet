const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const Fornecedores = require ("../Models/fornecedores")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const fornecedores = await Fornecedores(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(fornecedores)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await Fornecedores(sequelize, Sequelize.DataTypes).create({
            cnpj_fornecedor: req.body.cnpj_fornecedor,
            nome_empresa: req.body.nome_empresa,
            telefone_fornecedor: req.body.telefone_fornecedor,
            endereco_fornecedor: req.body.endereco_fornecedor
        })
        res.status(200).send({
            message: "Fornecedor cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Fornecedores(sequelize, Sequelize.DataTypes).update(
        {   
            cnpj_fornecedor: req.body.cnpj_fornecedor,
            nome_empresa: req.body.nome_empresa,
            telefone_fornecedor: req.body.telefone_fornecedor,
            endereco_fornecedor: req.body.endereco_fornecedor
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Fornecedor atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Fornecedores(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        
        }
        );
        res.status(200).send("Fornecedor deletado com sucesso!")
    },
    
}