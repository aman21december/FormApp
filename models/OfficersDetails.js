const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const OfficersDetails = sequelize.define('OfficersDetails', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    ViceChancellor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Full-time Principal name cannot be empty'
            },
        }
    },
    FULLTIMEPRINCIPAL: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Vice Chancellor name cannot be empty'
            },
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Must be a valid email address'
            },
            notEmpty: {
                msg: 'Email cannot be empty'
            }
        }
    },
    CollegeHeadEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Must be a valid email address'
            },
            notEmpty: {
                msg: 'College Head Email cannot be empty'
            }
        }
    },
    Mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Mobile number cannot be empty'
            },
            isNumeric: {
                msg: 'Mobile number must contain only numbers'
            },
            len: {
                args: [10, 15],
                msg: 'Mobile number must be between 10 and 15 digits long'
            }
        }
    },
    Telephone:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: 'Telephone number cannot be empty'
            },
            isNumeric: {
                msg: 'Telephone number must contain only numbers'
            },
            len: {
                args: [8, 15],
                msg: 'Telephone number must be between 10 and 15 digits long'
            }
        }
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(OfficersDetails, { foreignKey: 'collegeId' });
OfficersDetails.belongsTo(User, { foreignKey: 'collegeId' });

module.exports = OfficersDetails;