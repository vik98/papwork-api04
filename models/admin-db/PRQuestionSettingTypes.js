const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PRQuestionSettingTypesSchema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    fieldLabel: {
        type:String,
        required:true
    },
    prquestiontypes:[{
        type:Number,
        ref:'prquestiontypes'
    }]
},{ _id: false });

module.exports=mongoose.model("prquestionsettingtypes", PRQuestionSettingTypesSchema, 'prquestionsettingtype');