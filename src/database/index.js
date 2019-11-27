import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import UserType from "../app/models/UserType";
import User from "../app/models/User";
import PostCategory from "../app/models/PostCategory";
import PostDifficultyLevel from "../app/models/PostDifficultyLevel";
import Post from "../app/models/Post";
import PostRating from "../app/models/PostRating";
import PostExercise from "../app/models/PostExercise";
import ExerciseOption from "../app/models/ExerciseOption";

const models = [
  UserType,
  User,
  PostCategory,
  PostDifficultyLevel,
  Post,
  PostRating,
  PostExercise,
  ExerciseOption
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
