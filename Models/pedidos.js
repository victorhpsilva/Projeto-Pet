"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Pedidos extends Model{}

    Pedidos.init({
        qtd_item: DataTypes.TINYINT,
        item_pedido: DataTypes.STRING(40),
        valor_pedido: DataTypes.DECIMAL(6,2),
        data_pedido: DataTypes.DATE,
        id_cliente: DataTypes.TINYINT
    },
    { sequelize,
        modelName: "pedidos",
        timestamps: false
    });


    return Pedidos
}