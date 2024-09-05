const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fi = sequelize.define('FinancialInformation', {
    SNO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Items: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AmountInAbsoluteRsIncome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ExpenditureHead: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AmountInAbsoluteRsExpenditure: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('Financial Information table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = Fi;