const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const User=sequelize.define("User",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"COLLEGE",
        allowNull:false
    },
    name: { 
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to alter table: ', error);
});
module.exports={User};
