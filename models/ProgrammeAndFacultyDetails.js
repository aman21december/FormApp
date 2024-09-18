const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const PAFD = sequelize.define('ProgrammeAndFacultyDetails', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    SrNo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SrNo is required"
            }
        }
    },
    NameOfCourse: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Name of Course is required"
            }
        }
    },
    UgPg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Ug/Pg is required"
            }
        }
    },
    EnrolledStudents: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Enrolled Students is required"
            },
            isNumeric:{
                msg:"Enrolled Students must be numeric"
            }
        }
    },
    Sanctioned1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Sanctioned1 is required"
            }
        }
    },
    Working1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Working1 is required"
            }
        }
    },
    Sanctioned2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Sanctioned2 is required"
            }
        }
    },
    Working2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Working2 is required"
            }
        }
    },
    Sanctioned3: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Sanctioned3 is required"
            }
        }
    },
    Working3: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Working3 is required"
            }
        }
    },
    GuestTeacher:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:"Guest Teacher is required"
            }
        }
    },
    VocationalTeacher:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:{
                msg:"Vocational Teacher is required"
            }
        }
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(PAFD, { foreignKey: 'collegeId' });
PAFD.belongsTo(User, { foreignKey: 'collegeId' });
module.exports = PAFD;