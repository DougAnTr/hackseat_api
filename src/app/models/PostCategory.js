import Sequelize, { Model } from "sequelize";

class PostCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        category: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "post_categories"
      }
    );

    return this;
  }
}

export default PostCategory;
