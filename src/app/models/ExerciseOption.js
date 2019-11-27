import Sequelize, { Model } from "sequelize";

class ExerciseOption extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
        correct: Sequelize.BOOLEAN
      },
      {
        sequelize,
        tableName: "exercise_options"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.PostExercise, { foreignKey: "exercise" });
  }
}

export default ExerciseOption;
