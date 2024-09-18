const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const Address = sequelize.define('address', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    Location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Location cannot be empty'
            }
        }
    },
    AddressLine1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Address Line 1 cannot be empty'
            }
        }
    },
    AddressLine2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Address Line 2 cannot be empty'
            }
        }
    },
    LocalityCityTownVillage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Locality/City/Town/Village cannot be empty'
            }
        }
    },
    State: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'State cannot be empty'
            }
        }
    },
    District:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: 'District cannot be empty'
            }
        }
    },
    Country:{
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
            notEmpty: {
                msg: 'Country cannot be empty'
            }
        }
    },
    UrbanLocalBody:{
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
            notEmpty: {
                msg: 'Urban Local Body cannot be empty'
            }
        }
    },
    PinCode:{
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
            isNumeric: {
                msg: 'Pin Code must contain only numbers'
            },
            len: {
                args: [5, 10],
                msg: 'Pin Code must be between 5 and 10 digits long'
            }
        }
    },
    TotalAreaInAcre:{
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
            isNumeric: {
                msg: 'Total Area in Acre must be a numeric value'
            }
        }
    },
    TotalConstructedArea:{
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
            isNumeric: {
                msg: 'Total Constructed Area must be a numeric value'
            }
        }
    },
    Website:{
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
            isUrl: {
                msg: 'Website must be a valid URL'
            }
        }
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

User.hasMany(Address, { foreignKey: 'collegeId' });
Address.belongsTo(User, { foreignKey: 'collegeId' });
module.exports = Address;