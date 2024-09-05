const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LDOCW = sequelize.define('LegacyDataOfCivilWork', {
    SNO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NameOfSchemes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SchemeApprovalFinancialyear: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalApprovedAmount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FinancialYearAmountReleased: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalExpemditureAmount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    YearOfStartOfWork: {
        type: DataTypes.STRING,
        allowNull: false
    },
    HandOverTaken: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Inaugurated: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Below25percentwork:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    Between25to50percentwork:{
        type:DataTypes.STRING,
        allowNull:true
    },
    Above50percentwork:{
        type:DataTypes.STRING,
        allowNull:true
    },
    NotStarted:{
        type:DataTypes.STRING,
        allowNull:true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('Programme and Faculty Details table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = LDOCW;