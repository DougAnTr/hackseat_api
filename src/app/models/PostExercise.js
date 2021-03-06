import Sequelize, { Model } from "sequelize";

class PostExercise extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
        correct_value: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "post_exercises"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: "post", as: "post_exercises" });
  }
}

export default PostExercise;
