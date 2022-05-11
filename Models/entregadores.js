"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Entregadores extends Model{}

    Entregadores.init({
        nome_entregador: DataTypes.STRING (60),
        telefone_entregador: DataTypes.STRING (12),
        id_pedidos: DataTypes.SMALLINT
    },
    { sequelize,
        modelName: "entregadores",
        timestamps: false

    });

    return Entregadores
}