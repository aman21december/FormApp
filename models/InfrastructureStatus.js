const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const iS = sequelize.define('infraStatus', {
    AuditoriumAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AuditoriumSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AuditoriumTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AuditoriumYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AuditoriumFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AuditoriumRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SeminarHallAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SeminarHallSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SeminarHallTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SeminarHallYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SeminarHallFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SeminarHallRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsHallAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsWithProjectorHallAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsWithProjectorSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ClassroomsWithProjectorFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SmartClassroomsAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SmartClassroomsSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SmartClassroomsTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SmartClassroomsFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SmartClassroomsRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProjectsAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProjectsSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProjectsTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProjectsFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProjectsRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    FlatPanelAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    FlatPanelSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    FlatPanelFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    FlatPanelRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    DrinkingWaterFacilityAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    DrinkingWaterFacilitySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    DrinkingWaterFacilityTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    DrinkingWaterFacilityFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    DrinkingWaterFacilityRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerLabAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NoOfComputerLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NoOfComputerLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NoOfComputerLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NoOfComputerLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NoOfComputerLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LibraryAvailable: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LibrarySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LibraryTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LibraryYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LibraryFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LibraryRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysHostel: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysHostelSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysHostelTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysHostelYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysHostelFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysHostelRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsHostel: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsHostelSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsHostelTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsHostelYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsHostelFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsHostelRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ReadingRoom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ReadingRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ReadingRoomTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ReadingRoomYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ReadingRoomFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ReadingRoomRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },    ReadingRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CommonRoom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CommonRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CommonRoomTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CommonRoomYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CommonRoomFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CommonRoomRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PhysicsLab: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PhysicsLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PhysicsLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PhysicsLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PhysicsLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PhysicsLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ZoologyLab: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ZoologyLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ZoologyLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ZoologyLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ZoologyLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ZoologyLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanyLab: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanyLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanyLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanyLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanyLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanyLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanicalGarden: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanicalGardenSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanicalGardenTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanicalGardenYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanicalGardenFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BotanicalGardenRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    }, 
    Psychology: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PsychologySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PsychologyTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PsychologyYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PsychologyFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PsychologyRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },   
    Geogrophy: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GeogrophySpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GeogrophyTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GeogrophyYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GeogrophyFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GeogrophyRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HomeScience: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HomeScienceSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HomeScienceTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HomeScienceYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HomeScienceFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HomeScienceRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LanguageLab: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LanguageLabSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LanguageLabTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LanguageLabYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LanguageLabFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LanguageLabRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Canteen: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CanteenSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CanteenTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CanteenYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CanteenFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CanteenRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HealthCare: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HealthCareSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HealthCareTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HealthCareYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HealthCareFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HealthCareRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Media: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    MediaSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    MediaYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    MediaFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    MediaRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProfessorsCabin: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProfessorsCabinSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProfessorsCabinTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProfessorsCabinYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProfessorsCabinFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ProfessorsCabinRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TeachersRoom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TeachersRoomSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TeachersRoomTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TeachersRoomYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TeachersRoomFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TeachersRoomRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceTeachingStaff: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceTeachingStaffSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceTeachingStaffTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceTeachingStaffYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceTeachingStaffFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceTeachingStaffRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceNonTeachingStaff: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceNonTeachingStaffSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceNonTeachingStaffTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceNonTeachingStaffYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceNonTeachingStaffFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ResidenceNonTeachingStaffRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerCentre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerCentreSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerCentreYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ComputerCentreRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Counseling: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CounselingSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Counseling: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CounselingSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CounselingTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CounselingYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CounselingFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CounselingRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Nss: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NssSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NssTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NssYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NssFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NssRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Yoga: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    YogaSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    YogaTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    YogaYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    YogaFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    YogaRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SkillCentre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SkillCentreSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SkillCentreTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SkillCentreYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SkillCentreFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SkillCentreRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Playground: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PlaygroundSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PlaygroundFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PlaygroundRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Indoor: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    IndoorSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Indoor: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    IndoorSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    IndoorFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    IndoorRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CCTVMonitoring: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CCTVMonitoringSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CCTVMonitoringFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CCTVMonitoringRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Wifi: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    WifiSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    WifiFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    WifiRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GuestHouse: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GuestHouseSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GuestHouseTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GuestHouseYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GuestHouseFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GuestHouseRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoundaryWall: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoundaryWallFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoundaryWallRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    EntranceGate: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    EntranceGateSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    EntranceGateFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    EntranceGateRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsToilet: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsToiletSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsToiletFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GirlsToiletRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysToilet: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysToiletSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysToiletTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysToiletYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysToiletFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BoysToiletRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Acre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AcreSpecifyTheNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AcreTotalCapacity: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AcreYearOfConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AcreFunctionalOrDysfunctional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    AcreRenovationOrConstruction: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
sequelize.sync().then(() => {
    console.log('Infra Status table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = iS;
