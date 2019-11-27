"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("post_exercises", "type", {
      type: Sequelize.INTEGER,
      references: {
        model: "exercise_types",
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("post_exercises", "type");
  }
};
