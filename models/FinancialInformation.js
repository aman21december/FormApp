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
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"tuition_fee cannot be empty"
            },
            isNumeric: {
                msg: 'tuition_fee must be a numeric value'
            }
        }
    },
    tuition_expenditure: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"tuition expenditure cannot be empty"
            },
            isNumeric: {
                msg: 'tuition expenditure must be a numeric value'
            }
        }
    },
    tuition_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"tuition expenditure amount cannot be empty"
            },
            isNumeric: {
                msg: 'tuition expenditure amount must be a numeric value'
            }
        }
    },
    exam_fee: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"exam fee cannot be empty"
            },
            isNumeric: {
                msg: 'exam fee must be a numeric value'
            }
        }
    },
    exam_expenditure: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"exam expenditure cannot be empty"
            },
            isNumeric: {
                msg: 'exam expenditure must be a numeric value'
            }
        }
    },
    exam_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"exam expenditure amount cannot be empty"
            },
            isNumeric: {
                msg: 'exam expenditure amount must be a numeric value'
            }
        }
    },
    donations: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"donations cannot be empty"
            },
            isNumeric: {
                msg: 'donations must be a numeric value'
            }
        }
    },
    donations_expenditure: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"donations expenditure cannot be empty"
            },
            isNumeric: {
                msg: 'donations expenditure must be a numeric value'
            }
        }
    },
    donations_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"donations expenditure amount cannot be empty"
            },
            isNumeric: {
                msg: 'donations expenditure amount must be a numeric value'
            }
        }
    },
    dev_grant: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"dev grant cannot be empty"
            },
            isNumeric: {
                msg: 'dev grant must be a numeric value'
            }
        }
    },
    dev_grant_expenditure: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"dev grant expenditure cannot be empty"
            },
            isNumeric: {
                msg: 'dev grant expenditure must be a numeric value'
            }
        }
    },
    dev_grant_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"dev grant expenditure amount cannot be empty"
            },
            isNumeric: {
                msg: 'dev grant expenditure amount must be a numeric value'
            }
        }
    },
    uni_grant: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"uni grant cannot be empty"
            },
            isNumeric: {
                msg: 'uni grant must be a numeric value'
            }
        }
    },
    uni_grant_expenditure: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"uni grant expenditure cannot be empty"
            },
            isNumeric: {
                msg: 'uni grant expenditure must be a numeric value'
            }
        }
    },
    uni_grant_expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
            msg:"uni grant expenditure amount cannot be empty"
        },
        isNumeric: {
            msg: 'uni grant expenditure must be a numeric value'
        }
     }
    },
     
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(Fi, { foreignKey: 'collegeId' });
Fi.belongsTo(User, { foreignKey: 'collegeId' });
module.exports = Fi;