"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "user_type", {
      type: Sequelize.INTEGER,
      alowNull: false,
      references: {
        model: "user_types",
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("users", "user_type");
  }
};
