const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const PAFD = sequelize.define('ProgrammeAndFacultyDetails', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
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
    EnrolledStudents: {
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
User.hasMany(PAFD, { foreignKey: 'collegeId' });
PAFD.belongsTo(User, { foreignKey: 'collegeId' });
module.exports = PAFD;