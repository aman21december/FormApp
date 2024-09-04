const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('address', {
    Location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AddressLine1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AddressLine2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LocalityCityTownVillage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    State: {
        type: DataTypes.STRING,
        allowNull: false
    },
    District:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    Country:{
        type:DataTypes.STRING,
        allowNull:true
    },
    UrbanLocalBody:{
        type:DataTypes.STRING,
        allowNull:true
    },
    PinCode:{
        type:DataTypes.STRING,
        allowNull:true
    },
    TotalAreaInAcre:{
        type:DataTypes.STRING,
        allowNull:true
    },
    TotalConstructedArea:{
        type:DataTypes.STRING,
        allowNull:true
    },
    Website:{
        type:DataTypes.STRING,
        allowNull:true
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('address table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = Address;