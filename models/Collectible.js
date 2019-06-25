module.exports = function(sequelize, DataTypes) {
  var Collectible = sequelize.define("Collectible", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    serNum: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Collectible.associate = function(models) {
    Collectible.belongsTo(models.User);
  }

  return Collectible;
}