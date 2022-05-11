const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class ItensPedidos extends Model{}

    ItensPedidos.init({
        qtd_itens: DataTypes.TINYINT,
        valor_parcial: DataTypes.DECIMAL(8,2),
        id_produtos: DataTypes.SMALLINT,
        id_pedidos: DataTypes.SMALLINT
    },
    { sequelize,
        modelName: "itenspedidos",
        timestamps: false
    });


    return ItensPedidos
}