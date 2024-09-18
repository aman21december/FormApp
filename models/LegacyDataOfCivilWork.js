const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const LDOCW = sequelize.define('LegacyDataOfCivilWork', {
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
        validate:{
            notEmpty:{
                msg:"SNO is required"
            }
        }
    },
    NameOfSchemes: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Name of Schemes is required"
            }
        }
    },
    SchemeApprovalFinancialyear: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Scheme Approval financial year is required"
            },
            isNumeric:{
                msg:"Scheme Approval financial year must be numeric"
            }
        }
    },
    TotalApprovedAmount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Total Approved Amount is required"
            },
            isNumeric:{
                msg:"Total Approved Amount must be numeric"
            }
        }
    },
    FinancialYearAmountReleased: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Financial Year Amount Released is required"
            },
            isNumeric:{
                msg:"Financial Year Amount Released must be numeric"
            }
        }
    },
    TotalExpemditureAmount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Total Expemditure Amount is required"
            },
            isNumeric:{
                msg:"Total Expemditure Amount must be numeric"
            }
        }
    },
    YearOfStartOfWork: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Year Of Start Of Work is required"
            },
            isNumeric:{
                msg:"Year Of Start Of Work must be numeric"
            }
        }
    },
    HandOverTaken: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Hand Over Taken is required"
            }
        }
    },
    Inaugurated: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Inaugurated is required"
            }
        }
    },
    Below25percentwork:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:"Below 25 percent work is required"
            }
        }
    },
    Between25to50percentwork:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:{
                msg:"Between 25 to 50 percent work is required"
            }
        }
    },
    Above50percentwork:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:{
                msg:"Above 50 percent work is required"
            }
        }
    },
    NotStarted:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:{
                msg:"Not Started is required"
            }
        }
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(LDOCW, { foreignKey: 'collegeId' });
LDOCW.belongsTo(User, { foreignKey: 'collegeId' });

module.exports = LDOCW;