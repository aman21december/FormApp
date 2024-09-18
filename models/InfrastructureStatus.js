const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { User } = require('./User');

const iS = sequelize.define('infraStatus', {
    collegeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    AuditoriumAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AuditoriumAvailable is required"
            }
        }
    },
    AuditoriumSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AuditoriumSpecifyTheNumber is required"
            }
        }
    },
    AuditoriumTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AuditoriumTotalCapacity is required"
            }
        }
    },
    AuditoriumYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AuditoriumYearOfConstruction is required"
            }
        }
    },
    AuditoriumFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AuditoriumFunctionalOrDysfunctional is required"
            }
        }
    },
    AuditoriumRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AuditoriumRenovationOrConstruction is required"
            }
        }
    },
    SeminarHallAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SeminarHallAvailable is required"
            }
        }
    },
    SeminarHallSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SeminarHallSpecifyTheNumber is required"
            }
        }
    },
    SeminarHallTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SeminarHallTotalCapacity is required"
            }
        }
    },
    SeminarHallYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SeminarHallYearOfConstruction is required"
            }
        }
    },
    SeminarHallFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SeminarHallFunctionalOrDysfunctional is required"
            }
        }
    },
    SeminarHallRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SeminarHallRenovationOrConstruction is required"
            }
        }
    },
    ClassroomsHallAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsHallAvailable is required"
            }
        }
    },
    ClassroomsSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsSpecifyTheNumber is required"
            }
        }
    },
    ClassroomsTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsTotalCapacity is required"
            }
        }
    },
    ClassroomsYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsYearOfConstruction is required"
            }
        }
    },
    ClassroomsFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsFunctionalOrDysfunctional is required"
            }
        }
    },
    ClassroomsRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsRenovationOrConstruction is required"
            }
        }
    },
    ClassroomsWithProjectorHallAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsWithProjectorHallAvailable is required"
            }
        }
    },
    ClassroomsWithProjectorSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsWithProjectorSpecifyTheNumber is required"
            }
        }
    },
    ClassroomsWithProjectorFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ClassroomsWithProjectorFunctionalOrDysfunctional is required"
            }
        }
    },
    SmartClassroomsAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SmartClassroomsAvailable is required"
            }
        }
    },
    SmartClassroomsSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SmartClassroomsSpecifyTheNumber is required"
            }
        }
    },
    SmartClassroomsTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SmartClassroomsTotalCapacity is required"
            }
        }
    },
    SmartClassroomsFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SmartClassroomsFunctionalOrDysfunctional is required"
            }
        }
    },
    SmartClassroomsRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SmartClassroomsRenovationOrConstruction is required"
            }
        },
    },
    ProjectsAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProjectsAvailable is required"
            }
        }
    },
    ProjectsSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProjectsSpecifyTheNumber is required"
            }
        }
    },
    ProjectsTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProjectsTotalCapacity is required"
            }
        }
    },
    ProjectsFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProjectsFunctionalOrDysfunctional is required"
            }
        }
    },
    ProjectsRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProjectsRenovationOrConstruction is required"
            }
        }
    },
    FlatPanelAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"FlatPanelAvailable is required"
            }
        }
    },
    FlatPanelSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"FlatPanelSpecifyTheNumber is required"
            }
        }
    },
    FlatPanelFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"FlatPanelFunctionalOrDysfunctional is required"
            }
        }
    },
    FlatPanelRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"FlatPanelRenovationOrConstruction is required"
            }
        }
    },
    DrinkingWaterFacilityAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"DrinkingWaterFacilityAvailable is required"
            }
        }
    },
    DrinkingWaterFacilitySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"DrinkingWaterFacilitySpecifyTheNumber is required"
            }
        }
    },
    DrinkingWaterFacilityTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"DrinkingWaterFacilityTotalCapacity is required"
            }
        }
    },
    DrinkingWaterFacilityFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"DrinkingWaterFacilityFunctionalOrDysfunctional is required"
            }
        }
    },
    DrinkingWaterFacilityRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"DrinkingWaterFacilityRenovationOrConstruction is required"
            }
        }
    },
    ComputerLabAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerLabAvailable is required"
            }
        }
    },
    ComputerLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerLabSpecifyTheNumber is required"
            }
        }
    },
    ComputerLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerLabTotalCapacity is required"
            }
        }
    },
    ComputerLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerLabYearOfConstruction is required"
            }
        }
    },
    ComputerLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerLabFunctionalOrDysfunctional is required"
            }
        }
    },
    ComputerLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerLabRenovationOrConstruction is required"
            }
        }
    },
    NoOfComputerLabAvailable:{
        type: DataTypes.TEXT,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:"NoOfComputerLabAvailable is required"
            }
        }
    },
    NoOfComputerLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NoOfComputerLabSpecifyTheNumber is required"
            }
        }
    },
    NoOfComputerLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NoOfComputerLabTotalCapacity is required"
            }
        }
    },
    NoOfComputerLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NoOfComputerLabYearOfConstruction is required"
            }
        }
    },
    NoOfComputerLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NoOfComputerLabFunctionalOrDysfunctional is required"
            }
        }
    },
    NoOfComputerLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NoOfComputerLabRenovationOrConstruction is required"
            }
        }
    },
    LibraryAvailable: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LibraryAvailable is required"
            }
        }
    },
    LibrarySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LibrarySpecifyTheNumber is required"
            }
        }
    },
    LibraryTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LibraryTotalCapacity is required"
            }
        }
    },
    LibraryYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LibraryYearOfConstruction is required"
            }
        }
    },
    LibraryFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LibraryFunctionalOrDysfunctional is required"
            }
        }
    },
    LibraryRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LibraryRenovationOrConstruction is required"
            }
        }
    },
    BoysHostel: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysHostel is required"
            }
        }
    },
    BoysHostelSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysHostelSpecifyTheNumber is required"
            }
        }
    },
    BoysHostelTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysHostelTotalCapacity is required"
            }
        }
    },
    BoysHostelYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysHostelYearOfConstruction is required"
            }
        }
    },
    BoysHostelFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysHostelFunctionalOrDysfunctional is required"
            }
        }
    },
    BoysHostelRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysHostelRenovationOrConstruction is required"
            }
        }
    },
    GirlsHostel: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsHostel is required"
            }
        }
    },
    GirlsHostelSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsHostelSpecifyTheNumber is required"
            }
        }
    },
    GirlsHostelTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsHostelTotalCapacity is required"
            }
        }
    },
    GirlsHostelYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsHostelYearOfConstruction is required"
            }
        }
    },
    GirlsHostelFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsHostelFunctionalOrDysfunctional is required"
            }
        }
    },
    GirlsHostelRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsHostelRenovationOrConstruction is required"
            }
        }
    },
    ReadingRoom: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ReadingRoom is required"
            }
        }
    },
    ReadingRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ReadingRoomSpecifyTheNumber is required"
            }
        }
    },
    ReadingRoomTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ReadingRoomTotalCapacity is required"
            }
        }
    },
    ReadingRoomYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ReadingRoomYearOfConstruction is required"
            }
        }
    },
    ReadingRoomFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ReadingRoomFunctionalOrDysfunctional is required"
            }
        }
    },
    ReadingRoomRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ReadingRoomRenovationOrConstruction is required"
            }
        }
    },    ReadingRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ReadingRoomSpecifyTheNumber is required"
            }
        }
    },
    CommonRoom: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CommonRoom is required"
            }
        }
    },
    CommonRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CommonRoomSpecifyTheNumber is required"
            }
        }
    },
    CommonRoomTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CommonRoomTotalCapacity is required"
            }
        }
    },
    CommonRoomYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CommonRoomYearOfConstruction is required"
            }
        }
    },
    CommonRoomFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CommonRoomFunctionalOrDysfunctional is required"
            }
        }
    },
    CommonRoomRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CommonRoomRenovationOrConstruction is required"
            }
        }
    },
    PhysicsLab: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PhysicsLab is required"
            }
        }
    },
    PhysicsLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PhysicsLabSpecifyTheNumber is required"
            }
        }
    },
    PhysicsLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PhysicsLabTotalCapacity is required"
            }
        }
    },
    PhysicsLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PhysicsLabYearOfConstruction is required"
            }
        }
    },
    PhysicsLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PhysicsLabFunctionalOrDysfunctional is required"
            }
        }
    },
    PhysicsLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PhysicsLabRenovationOrConstruction is required"
            }
        }
    },
    ZoologyLab: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ZoologyLab is required"
            }
        }
    },
    ZoologyLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ZoologyLabSpecifyTheNumber is required"
            }
        }
    },
    ZoologyLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ZoologyLabTotalCapacity is required"
            }
        }
    },
    ZoologyLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ZoologyLabYearOfConstruction is required"
            }
        }
    },
    ZoologyLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ZoologyLabFunctionalOrDysfunctional is required"
            }
        }
    },
    ZoologyLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ZoologyLabRenovationOrConstruction is required"
            }
        }
    },
    BotanyLab: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanyLab is required"
            }
        }
    },
    BotanyLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanyLabSpecifyTheNumber is required"
            }
        }
    },
    BotanyLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanyLabTotalCapacity is required"
            }
        }
    },
    BotanyLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanyLabYearOfConstruction is required"
            }
        }
    },
    BotanyLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanyLabFunctionalOrDysfunctional is required"
            }
        }
    },
    BotanyLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanyLabRenovationOrConstruction is required"
            }
        }
    },
    BotanicalGarden: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanicalGarden is required"
            }
        }
    },
    BotanicalGardenSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanicalGardenSpecifyTheNumber is required"
            }
        }
    },
    BotanicalGardenTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanicalGardenTotalCapacity is required"
            }
        }
    },
    BotanicalGardenYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanicalGardenYearOfConstruction is required"
            }
        }
    },
    BotanicalGardenFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanicalGardenFunctionalOrDysfunctional is required"
            }
        }
    },
    BotanicalGardenRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BotanicalGardenRenovationOrConstruction is required"
            }
        }
    }, 
    Psychology: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Psychology is required"
            }
        }
    },
    PsychologySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PsychologySpecifyTheNumber is required"
            }
        }
    },
    PsychologyTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PsychologyTotalCapacity is required"
            }
        }
    },
    PsychologyYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PsychologyYearOfConstruction is required"
            }
        }
    },
    PsychologyFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PsychologyFunctionalOrDysfunctional is required"
            }
        }
    },
    PsychologyRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PsychologyRenovationOrConstruction is required"
            }
        }
    },   
    Geogrophy: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Geogrophy is required"
            }
        }
    },
    GeogrophySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GeogrophySpecifyTheNumber is required"
            }
        }
    },
    GeogrophyTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GeogrophyTotalCapacity is required"
            }
        }
    },
    GeogrophyYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GeogrophyYearOfConstruction is required"
            }
        }
    },
    GeogrophyFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GeogrophyFunctionalOrDysfunctional is required"
            }
        }
    },
    GeogrophyRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GeogrophyRenovationOrConstruction is required"
            }
        }
    },
    HomeScience: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HomeScience is required"
            }
        }
    },
    HomeScienceSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HomeScienceSpecifyTheNumber is required"
            }
        }
    },
    HomeScienceTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HomeScienceTotalCapacity is required"
            }
        }
    },
    HomeScienceYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HomeScienceYearOfConstruction is required"
            }
        }
    },
    HomeScienceFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HomeScienceFunctionalOrDysfunctional is required"
            }
        }
    },
    HomeScienceRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HomeScienceRenovationOrConstruction is required"
            }
        }
    },
    LanguageLab: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LanguageLab is required"
            }
        }
    },
    LanguageLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LanguageLabSpecifyTheNumber is required"
            }
        }
    },
    LanguageLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LanguageLabTotalCapacity is required"
            }
        }
    },
    LanguageLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LanguageLabYearOfConstruction is required"
            }
        }
    },
    LanguageLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LanguageLabFunctionalOrDysfunctional is required"
            }
        }
    },
    LanguageLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"LanguageLabRenovationOrConstruction is required"
            }
        }
    },
    Canteen: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Canteen is required"
            }
        }
    },
    CanteenSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CanteenSpecifyTheNumber is required"
            }
        }
    },
    CanteenTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CanteenTotalCapacity is required"
            }
        }
    },
    CanteenYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CanteenYearOfConstruction is required"
            }
        }
    },
    CanteenFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CanteenFunctionalOrDysfunctional is required"
            }
        }
    },
    CanteenRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CanteenRenovationOrConstruction is required"
            }
        }
    },
    HealthCare: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HealthCare is required"
            }
        }
    },
    HealthCareSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HealthCareSpecifyTheNumber is required"
            }
        }
    },
    HealthCareTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HealthCareTotalCapacity is required"
            }
        }
    },
    HealthCareYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HealthCareYearOfConstruction is required"
            }
        }
    },
    HealthCareFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HealthCareFunctionalOrDysfunctional is required"
            }
        }
    },
    HealthCareRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"HealthCareRenovationOrConstruction is required"
            }
        }
    },
    Media: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Media is required"
            }
        }
    },
    MediaSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"MediaSpecifyTheNumber is required"
            }
        }
    },
    MediaYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"MediaYearOfConstruction is required"
            }
        }
    },
    MediaFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"MediaFunctionalOrDysfunctional is required"
            }
        }
    },
    MediaRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"MediaRenovationOrConstruction is required"
            }
        }
    },
    ProfessorsCabin: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProfessorsCabin is required"
            }
        }
    },
    ProfessorsCabinSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProfessorsCabinSpecifyTheNumber is required"
            }
        }
    },
    ProfessorsCabinTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProfessorsCabinTotalCapacity is required"
            }
        }
    },
    ProfessorsCabinYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProfessorsCabinYearOfConstruction is required"
            }
        }
    },
    ProfessorsCabinFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProfessorsCabinFunctionalOrDysfunctional is required"
            }
        }
    },
    ProfessorsCabinRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ProfessorsCabinRenovationOrConstruction is required"
            }
        }
    },
    TeachersRoom: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"TeachersRoom is required"
            }
        }
    },
    TeachersRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"TeachersRoomSpecifyTheNumber is required"
            }
        }
    },
    TeachersRoomTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"TeachersRoomTotalCapacity is required"
            }
        }
    },
    TeachersRoomYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"TeachersRoomYearOfConstruction is required"
            }
        }
    },
    TeachersRoomFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"TeachersRoomFunctionalOrDysfunctional is required"
            }
        }
    },
    TeachersRoomRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"TeachersRoomRenovationOrConstruction is required"
            }
        }
    },
    ResidenceTeachingStaff: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceTeachingStaff is required"
            }
        }
    },
    ResidenceTeachingStaffSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceTeachingStaffSpecifyTheNumber is required"
            }
        }
    },
    ResidenceTeachingStaffTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceTeachingStaffTotalCapacity is required"
            }
        }
    },
    ResidenceTeachingStaffYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceTeachingStaffYearOfConstruction is required"
            }
        }
    },
    ResidenceTeachingStaffFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceTeachingStaffFunctionalOrDysfunctional is required"
            }
        }
    },
    ResidenceTeachingStaffRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceTeachingStaffRenovationOrConstruction is required"
            }
        }
    },
    ResidenceNonTeachingStaff: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceNonTeachingStaff is required"
            }
        }
    },
    ResidenceNonTeachingStaffSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceNonTeachingStaffSpecifyTheNumber is required"
            }
        }
    },
    ResidenceNonTeachingStaffTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceNonTeachingStaffTotalCapacity is required"
            }
        }
    },
    ResidenceNonTeachingStaffYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceNonTeachingStaffYearOfConstruction is required"
            }
        }
    },
    ResidenceNonTeachingStaffFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceNonTeachingStaffFunctionalOrDysfunctional is required"
            }
        }
    },
    ResidenceNonTeachingStaffRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ResidenceNonTeachingStaffRenovationOrConstruction is required"
            }
        }
    },
    ComputerCentre: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerCentre is required"
            }
        }
    },
    ComputerCentreSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerCentreSpecifyTheNumber is required"
            }
        }
    },
    ComputerCentreYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerCentreYearOfConstruction is required"
            }
        }
    },
    ComputerCentreFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerCentreFunctionalOrDysfunctional is required"
            }
        }
    },
    ComputerCentreRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"ComputerCentreRenovationOrConstruction is required"
            }
        }
    },
    Counseling: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Counseling is required"
            }
        }
    },
    CounselingSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CounselingSpecifyTheNumber is required"
            }
        }
    },
    CounselingTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CounselingTotalCapacity is required"
            }
        }
    },
    CounselingYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CounselingYearOfConstruction is required"
            }
        }
    },
    CounselingFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CounselingFunctionalOrDysfunctional is required"
            }
        }
    },
    CounselingRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CounselingRenovationOrConstruction is required"
            }
        }
    },
    Nss: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Nss is required"
            }
        }
    },
    NssSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NssSpecifyTheNumber is required"
            }
        }
    },
    NssTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NssTotalCapacity is required"
            }
        }
    },
    NssYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NssYearOfConstruction is required"
            }
        }
    },
    NssFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NssFunctionalOrDysfunctional is required"
            }
        }
    },
    NssRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"NssRenovationOrConstruction is required"
            }
        }
    },
    Yoga: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Yoga is required"
            }
        }
    },
    YogaSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"YogaSpecifyTheNumber is required"
            }
        }
    },
    YogaTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"YogaTotalCapacity is required"
            }
        }
    },
    YogaYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"YogaYearOfConstruction is required"
            }
        }
    },
    YogaFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"YogaFunctionalOrDysfunctional is required"
            }
        }
    },
    YogaRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"YogaRenovationOrConstruction is required"
            }
        }
    },
    SkillCentre: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SkillCentre is required"
            }
        }
    },
    SkillCentreSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SkillCentreSpecifyTheNumber is required"
            }
        }
    },
    SkillCentreTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SkillCentreTotalCapacity is required"
            }
        }
    },
    SkillCentreYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SkillCentreYearOfConstruction is required"
            }
        }
    },
    SkillCentreFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SkillCentreFunctionalOrDysfunctional is required"
            }
        }
    },
    SkillCentreRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"SkillCentreRenovationOrConstruction is required"
            }
        }
    },
    Playground: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Playground is required"
            }
        }
    },
    PlaygroundSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PlaygroundSpecifyTheNumber is required"
            }
        }
    },
    PlaygroundFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PlaygroundFunctionalOrDysfunctional is required"
            }
        }
    },
    PlaygroundRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"PlaygroundRenovationOrConstruction is required"
            }
        }
    },
    Indoor: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Indoor is required"
            }
        }
    },
    IndoorSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"IndoorSpecifyTheNumber is required"
            }
        }
    },
    IndoorFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"IndoorFunctionalOrDysfunctional is required"
            }
        }
    },
    IndoorRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"IndoorRenovationOrConstruction is required"
            }
        }
    },
    CCTVMonitoring: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CCTVMonitoring is required"
            }
        }
    },
    CCTVMonitoringSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CCTVMonitoringSpecifyTheNumber is required"
            }
        }
    },
    CCTVMonitoringFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CCTVMonitoringFunctionalOrDysfunctional is required"
            }
        }
    },
    CCTVMonitoringRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"CCTVMonitoringRenovationOrConstruction is required"
            }
        }
    },
    Wifi: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Wifi is required"
            }
        }
    },
    WifiSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"WifiSpecifyTheNumber is required"
            }
        }
    },
    WifiFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"WifiFunctionalOrDysfunctional is required"
            }
        }
    },
    WifiRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"WifiRenovationOrConstruction is required"
            }
        }
    },
    GuestHouse: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GuestHouse is required"
            }
        }
    },
    GuestHouseSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GuestHouseSpecifyTheNumber is required"
            }
        }
    },
    GuestHouseTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GuestHouseTotalCapacity is required"
            }
        }
    },
    GuestHouseYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GuestHouseYearOfConstruction is required"
            }
        }
    },
    GuestHouseFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GuestHouseFunctionalOrDysfunctional is required"
            }
        }
    },
    GuestHouseRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GuestHouseRenovationOrConstruction is required"
            }
        }
    },
    BoundaryWall: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoundaryWall is required"
            }
        }
    },
    BoundaryWallFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoundaryWallFunctionalOrDysfunctional is required"
            }
        }
    },
    BoundaryWallRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoundaryWallRenovationOrConstruction is required"
            }
        }
    },
    EntranceGate: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"EntranceGate is required"
            }
        }
    },
    EntranceGateSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"EntranceGateSpecifyTheNumber is required"
            }
        }
    },
    EntranceGateFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"EntranceGateFunctionalOrDysfunctional is required"
            }
        }
    },
    EntranceGateRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"EntranceGateRenovationOrConstruction is required"
            }
        }
    },
    GirlsToilet: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsToilet is required"
            }
        }
    },
    GirlsToiletSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsToiletSpecifyTheNumber is required"
            }
        }
    },
    GirlsToiletFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsToiletFunctionalOrDysfunctional is required"
            }
        }
    },
    GirlsToiletRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"GirlsToiletRenovationOrConstruction is required"
            }
        }
    },
    BoysToilet: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysToilet is required"
            }
        }
    },
    BoysToiletSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysToiletSpecifyTheNumber is required"
            }
        }
    },
    BoysToiletTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysToiletTotalCapacity is required"
            }
        }
    },
    BoysToiletYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysToiletYearOfConstruction is required"
            }
        }
    },
    BoysToiletFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysToiletFunctionalOrDysfunctional is required"
            }
        }
    },
    BoysToiletRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"BoysToiletRenovationOrConstruction is required"
            }
        }
    },
    Acre: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Acre is required"
            }
        }
    },
    AcreSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AcreSpecifyTheNumber is required"
            }
        }
    },
    AcreTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AcreTotalCapacity is required"
            }
        }
    },
    AcreYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AcreYearOfConstruction is required"
            }
        }
    },
    AcreFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AcreFunctionalOrDysfunctional is required"
            }
        }
    },
    AcreRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"AcreRenovationOrConstruction is required"
            }
        }
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
User.hasMany(iS, { foreignKey: 'collegeId' });
iS.belongsTo(User, { foreignKey: 'collegeId' });
sequelize.sync().then(() => {
    console.log('Infra Status table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = iS;
