const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const iR = sequelize.define('infraRenovation', {
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
        allowNull: false
    },
    DescriptionOfInfrastructure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DetailOfRenovationUpgradationProposed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ProposedAreaSqFeet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalCostPerSqFeet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalCost: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalAmountInInternalSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
    JustificationWhyItCantBeDoneByInternalSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(iR, { foreignKey: 'collegeId' });
iR.belongsTo(User, { foreignKey: 'collegeId' });
module.exports = iR;
