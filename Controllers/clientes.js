const { Sequelize, where } = require ("sequelize");
const sequelize = require ("../db/db")
const Clientes = require ("../Models/clientes")

module.exports = {
    async getAll (req, res) {
        const sequelize = new Sequelize ("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const clientes = await Clientes(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(clientes)
    },

    async create(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac",{
            host:"localhost",
            dialect: "mysql"
        });
        await Clientes(sequelize, Sequelize.DataTypes).create({
            nome_cliente: req.body.nome_cliente,
            cpf_cliente: req.body.cpf_cliente,
            telefone_cliente: req.body.telefone_cliente,
            endereco_cliente: req.body.endereco_cliente,
            bairro_cliente: req.body.bairro_cliente,
            cidade_cliente: req.body.cidade_cliente
        })
        res.status(200).send({
            message: "Cliente cadastrado com sucesso!"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clientes(sequelize, Sequelize.DataTypes).update({
            nome_cliente: req.body.nome_cliente,
            telefone_cliente: req.body.telefone_cliente,
            endereço_cliente: req.body.endereço_cliente,
            bairro_cliente: req.body.bairro_cliente,
            cidade_cliente: req.body.cidade_cliente,
            cpf_cliente: req.body.cpf_cliente
        },
        {
            where: { id: req.params.id }
        }
    );
        res.status(200).send("Cliente atualizado com sucesso!")
    },

    async delete(req, res){
        const sequelize = new Sequelize("projetopet", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clientes(sequelize, Sequelize.DataTypes).destroy(
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send("Cliente deletado com sucesso!")
    },
    
}