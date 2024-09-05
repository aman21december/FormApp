const Fi = require("../../models/FinancialInformation")

class Form4{
    async postFinancialInformation(req,res,next){         
        await Fi.create({
            SNO:'i',
            Items:"Tuition Fee and other fee",
            AmountInAbsoluteRsIncome:req.body.tuition_fee,
            ExpenditureHead:req.body.tuition_expenditure,
            AmountInAbsoluteRsExpenditure:req.body.tuition_expenditure_amount
        }) 
        await Fi.create({
            SNO:'ii',
            Items:"Examination Fee",
            AmountInAbsoluteRsIncome:req.body.exam_fee,
            ExpenditureHead:req.body.exam_expenditure,
            AmountInAbsoluteRsExpenditure:req.body.exam_expenditure_amount
        }) 
        await Fi.create({
            SNO:'iii',
            Items:"Donations",
            AmountInAbsoluteRsIncome:req.body.donations,
            ExpenditureHead:req.body.donations_expenditure,
            AmountInAbsoluteRsExpenditure:req.body.donations_expenditure_amount
        }) 
        await Fi.create({
            SNO:'2',
            Items:"Development Grant recieved from State Government",
            AmountInAbsoluteRsIncome:req.body.dev_grant,
            ExpenditureHead:req.body.dev_grant_expenditure,
            AmountInAbsoluteRsExpenditure:req.body.dev_grant_expenditure_amount
        }) 
        await Fi.create({
            SNO:'i',
            Items:"Grant received from university (in case of college)",
            AmountInAbsoluteRsIncome:req.body.uni_grant,
            ExpenditureHead:req.body.uni_grant_expenditure,
            AmountInAbsoluteRsExpenditure:req.body.uni_grant_expenditure_amount
        }) 
    }
}

module.exports={Form4}