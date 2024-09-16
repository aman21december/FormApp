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
User.hasMany(OfficersDetails, { foreignKey: 'collegeId' });
OfficersDetails.belongsTo(User, { foreignKey: 'collegeId' });

module.exports = OfficersDetails;