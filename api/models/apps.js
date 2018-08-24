/**
 * App.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        app_name: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        app_id: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        secret_id: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        is_active: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    },
    options: {
        tableName: 'apps',
        classMethods: {},
        instanceMethods: {},
        hooks: {},
        scopes: {},
        paranoidSchizophrenia: false,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    }
};
