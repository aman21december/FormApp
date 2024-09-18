const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const iC = sequelize.define('infraConstruction', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    SNO: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"SNO is required"
            }
        }
    },
    DescriptionOfInfrastructure: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"Description Of Infrastructure is required"
            }
        }
    },
    PurposeOfInfrastructure: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"PurposeOfInfrastructure is required"
            }
        }
    },
    ProposedAreaSqFeet: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"Proposed Area sq feet is required"
            },
            isNumeric:{
                msg:"Proposed Area sq feet must be numeric"
            }
        }
    },
    TotalCostPerSqFeet: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"Total Cost Per sq feet is required"
            },
            isNumeric:{
                msg:"Total Cost Per sq feet must be numeric"
            }
        }
    },
    TotalCost: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"Total Cost is required"
            },
            isNumeric:{
                msg:"Total Cost must be numeric"
            }
        }
    },
    TotalAmountInInternalSource: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"Total Amount In Internal Source  is required"
            },
            isNumeric:{
                msg:"Total Amount In Internal Source must be numeric"
            }
        }
    },
    JustificationWhyItCantBeDoneByInternalSource: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            notEmpty:{
                msg:"Justification Why It Cant Be Done By Internal Source is required"
            },
        }
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(iC, { foreignKey: 'collegeId' });
iC.belongsTo(User, { foreignKey: 'collegeId' });

module.exports = iC;