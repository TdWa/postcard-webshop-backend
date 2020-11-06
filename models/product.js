"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsToMany(models.category, {
        through: "productCategories",
        foreignKey: "productId",
      });
      product.belongsToMany(models.order, {
        through: "orderItems",
        foreignKey: "productId",
      });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      url: DataTypes.STRING,
      price: DataTypes.FLOAT,
      popularity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
