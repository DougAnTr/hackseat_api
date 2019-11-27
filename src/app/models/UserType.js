import Sequelize, { Model } from "sequelize";

class UserType extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "user_types"
      }
    );

    return this;
  }
}

export default UserType;
