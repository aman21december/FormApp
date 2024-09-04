const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OfficersDetails = sequelize.define('OfficersDetails', {
    ViceChancellor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FULLTIMEPRINCIPAL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CollegeHeadEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Mobile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telephone:{
        type: DataTypes.STRING,
        allowNull:false,
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('Officers Details table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = OfficersDetails;