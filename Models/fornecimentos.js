const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Fornecimentos extends Model{}

    Fornecimentos.init({
        data_fornecido: DataTypes.DATE,
        qntd_produto: DataTypes.TINYINT,
        id_produtos: DataTypes.SMALLINT,
        id_fornecedores: DataTypes.SMALLINT 
    },
    { sequelize, 
        modelName: "fornecimentos",
        timestamps: false
    });

    return Fornecimentos
} 
