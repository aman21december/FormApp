const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BasicInformation = sequelize.define('BasicInformation', {
    AISHECODE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NameOfInstitution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    YearOfEstablishment: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    NameOfTheUniversity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NAACStatus:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    GradingDetails:{
        type:DataTypes.STRING,
        allowNull:true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('basic Information table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = BasicInformation;