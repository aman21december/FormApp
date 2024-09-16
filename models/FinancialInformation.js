const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const Fi = sequelize.define('FinancialInformation', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    tuition_fee: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tuition_expenditure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tuition_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    exam_fee: {
        type: DataTypes.STRING,
        allowNull: false
    },
    exam_expenditure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    exam_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    donations: {
        type: DataTypes.STRING,
        allowNull: false
    },
    donations_expenditure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    donations_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dev_grant: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dev_grant_expenditure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dev_grant_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uni_grant: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uni_grant_expenditure: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uni_grant_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(Fi, { foreignKey: 'collegeId' });
Fi.belongsTo(User, { foreignKey: 'collegeId' });
module.exports = Fi;