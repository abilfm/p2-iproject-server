'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    brand_name: DataTypes.STRING,
    product_name: DataTypes.STRING,
    size: DataTypes.STRING,
    bpom_number: DataTypes.STRING,
    description: DataTypes.TEXT,
    how_to_use: DataTypes.TEXT,
    ingredients_list: DataTypes.TEXT,
    image_URL: DataTypes.STRING,
    marketplace_URL: DataTypes.STRING,
    social_media_URL: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};