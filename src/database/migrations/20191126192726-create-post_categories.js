"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("post_categories", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("post_categories");
  }
};
