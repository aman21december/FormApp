const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const iC = sequelize.define('infraConstruction', {
    SNO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DescriptionOfInfrastructure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PurposeOfInfrastructure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ProposedAreaSqFeet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalCostPerSqFeet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalCost: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalAmountInInternalSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
    JustificationWhyItCantBeDoneByInternalSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('Infra Construction table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = iC;