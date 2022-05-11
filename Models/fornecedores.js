"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Fornecedores extends Model{}

    Fornecedores.init({
        cnpj_fornecedor: DataTypes.BIGINT,
        nome_empresa: DataTypes.STRING(30),
        telefone_fornecedor: DataTypes.STRING(20),
        endereco_fornecedor: DataTypes.STRING(60)
    },
    { sequelize,
        modelName: "fornecedores",
        timestamps: false
    });


    return Fornecedores
}