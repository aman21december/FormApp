const Address = require("../../models/AddressDetail");
const BasicInformation = require("../../models/BasicInformation");
const Fi = require("../../models/FinancialInformation");
const iC = require("../../models/InfraConstruction");
const iR = require("../../models/InfraRenovation");
const iS = require("../../models/InfrastructureStatus");
const LDOCW = require("../../models/LegacyDataOfCivilWork");
const OfficersDetails = require("../../models/OfficersDetails");
const PAFD = require("../../models/ProgrammeAndFacultyDetails");
const { User } = require("../../models/User");

class deopanel{
    async getData(req,res,next){
const collegeData = await User.findAll({
  where: { role: 'college' },
  attributes: { exclude: ['password'] },
  include: [
    { model:  Address},
    { model: BasicInformation },
    { model: Fi },
    { model: iC },
    { model: iR },
    { model: iS },
    { model: LDOCW },
    { model: OfficersDetails },
    { model: PAFD },
  ]
});
res.render("deopanel.ejs",{collegeData})

//  res.json(collegeData)
    }
}

module.exports={deopanel}