const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PRQuestionTypesSchema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    fieldLabel: {
        type:String,
        required:true
    }
},{ _id: false });

module.exports=mongoose.model("prquestiontypes", PRQuestionTypesSchema, 'prquestiontypes');
