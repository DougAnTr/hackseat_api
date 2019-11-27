"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("post_difficulty_levels", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      level: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("post_difficulty_levels");
  }
};
