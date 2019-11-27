"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("exercise_options", {
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
      correct: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      exercise: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "post_exercises",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("exercise_options");
  }
};
