const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Clientes extends Model{}

    Clientes.init({
        nome_cliente: DataTypes.STRING (50),
        telefone_cliente: DataTypes.STRING(15),
        endereco_cliente: DataTypes.STRING(70),
        bairro_cliente: DataTypes.STRING (18),
        cidade_cliente: DataTypes.STRING (40),
        cpf_cliente: DataTypes.STRING (12)
    },
    { sequelize,
        modelName: "clientes",
        timestamps: false
    });


    return Clientes
}