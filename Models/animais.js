const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Animais extends Model{}

    Animais.init({
        nome_animal:DataTypes.STRING,
        idade_animal: DataTypes.TINYINT,
        id_cliente: DataTypes.TINYINT,
        especie_animal: DataTypes.STRING(20)
    },
    { sequelize,
        modelName: "animais",
        timestamps: false
    });


    return Animais
}