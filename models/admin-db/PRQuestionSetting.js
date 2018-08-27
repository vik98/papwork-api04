const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PRQuestionSettingsSchema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    elementType: {
        type:String,
        required:true
    },
    prquestionsettingtypes:[{
        type:Number,
        ref: 'prquestionsettingtypes'
    }]
},{ _id: false });

module.exports=mongoose.model("prquestionsettings", PRQuestionSettingsSchema, 'prquestionsettings');