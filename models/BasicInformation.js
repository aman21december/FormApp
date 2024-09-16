const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const BasicInformation = sequelize.define('BasicInformation', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
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


User.hasMany(BasicInformation, { foreignKey: 'collegeId' });
BasicInformation.belongsTo(User, { foreignKey: 'collegeId' });
sequelize.sync().then(() => {
    console.log('basic Information table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = BasicInformation;