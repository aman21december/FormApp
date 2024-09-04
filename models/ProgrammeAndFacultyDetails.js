const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PAFD = sequelize.define('ProgrammeAndFacultyDetails', {
    SrNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NameOfCourse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UgPg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Sanctioned1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Working1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Sanctioned2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Working2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Sanctioned3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Working3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    GuestTeacher:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    VocationalTeacher:{
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
module.exports = PAFD;