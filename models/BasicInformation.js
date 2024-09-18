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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'AISHE Code cannot be empty'
            },
        },
    },
    NameOfInstitution: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Name of Institution cannot be empty"
            }
        }
    },
    YearOfEstablishment: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isInt:{
                msg:"Year of Establishment must be an Integer"
            },
            min: {
                args: 1800,
                msg: 'Year of Establishment must be no earlier than 1800'
            },
            max: {
                args: new Date().getFullYear(),
                msg: `Year of Establishment cannot be in the future`
            }
        }
    },
    NameOfTheUniversity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'University name cannot be empty'
            }
        }
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Gender cannot be empty'
            }
        }
    },
    NAACStatus:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: 'NAAC Status cannot be empty'
            }
        }
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