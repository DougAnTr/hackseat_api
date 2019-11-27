"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("post_ratings", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      liked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
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
    return queryInterface.dropTable("post_ratings");
  }
};
