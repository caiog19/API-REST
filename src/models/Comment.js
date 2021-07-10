const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define('Comment', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{

});
Comment.associate = function(models) {
    Comment.belongsTo(models.User);
}

module.exports = Comment;