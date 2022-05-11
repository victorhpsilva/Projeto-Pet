"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Produtos extends Model{}

    Produtos.init({
        nome_produto: DataTypes.STRING (30),
        descricao_produto: DataTypes.STRING(100), 
        valor_unitario: DataTypes.DECIMAL(6,2) 
    },
    { sequelize,
        modelName: "produtos",
        timestamps: false
    });

    return Produtos
} 