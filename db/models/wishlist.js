"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, { foreignKey: "user_id" });
      this.belongsTo(models.watches, { foreignKey: "watch_id" });
    }
  }
  wishlist.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      watch_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "watches",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "wishlist",
      underscored: true,
    }
  );
  return wishlist;
};
