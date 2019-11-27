import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "users"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.UserType, { foreignKey: "user_type", as: "type" });
  }
}

export default User;
