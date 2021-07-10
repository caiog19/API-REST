const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date_of_birth: {
        type:
        DataTypes.DATEONLY,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    }
},
{
    //timestamps = false
});

User.associate = function(models) {
    User.hasMany(models.Comment);
}

module.exports = User;