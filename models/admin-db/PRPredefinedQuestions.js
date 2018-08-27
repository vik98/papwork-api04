const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PRPredefinedQuestionsSchema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    questionLabel: {
        type:String,
        required:true
    },
    question: {
        type:String,
        required:true
    },
    questionDescription: {
        type:String,
        required:true
    },
    hintText: {
        type:String,
        required:true
    },
    placeholderText: {
        type:String,
        required:true
    },
    prquestiontypes:[{
        type:Number,
        ref:'prquestiontypes'
    }]
},{ _id: false });

module.exports=mongoose.model("prpredefinedquestion", PRPredefinedQuestionsSchema, 'prpredefinedquestion');