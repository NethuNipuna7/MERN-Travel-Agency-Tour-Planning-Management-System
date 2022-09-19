const mongoose = require('mongoose');

const TravelDocAddSchema = new mongoose.Schema({

     Document_name:{
         type:String,
         required: true
     },

     Document_Link:{
         type:String,
         required:true
     },

     Country_name:{
         type:String,
         required:true
     },

     Submit_date:{
        type:String,
        required:true
    }



});

module.exports = mongoose.model('TravelDocAdd',TravelDocAddSchema);