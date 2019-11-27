"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("posts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "post_categories",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        }
      },
      difficulty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "post_difficulty_levels",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        }
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("posts");
  }
};
