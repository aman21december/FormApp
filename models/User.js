const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const User=sequelize.define("User",{
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:"Username is required"
            },
            isEmail:{
                msg:"username should be a valid email"
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[6,100],
                msg:"Password must be atleast 6 characters log"
            }
        }
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"COLLEGE",
        allowNull:false,
        validate:{
            isIn:{
                args:[["COLLEGE","DEO"]],
                msg:"role must be one of college or deo"
            }
        }
    },
    name: { 
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:{
                msg:"name is required"
            }
        }
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
