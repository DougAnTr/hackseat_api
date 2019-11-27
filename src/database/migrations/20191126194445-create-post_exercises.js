"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("post_exercises", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correct_value: {
        type: Sequelize.STRING
      },
      post: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("post_exercises");
  }
};
