const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({

  propertyType: {
    type: String,
    required: [true, "Please Enter PropertyType"],
  },
  location: {
    type: String,
    required: [true, "Please Enter Location"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Price"],
  },
  description:{
    type: String,
    required: [true, "Please Enter Description"],
  }, 
  propertyadder: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    lowercase: true,
  },
  image:{
    type: String,
    required: [false, "Please Enter image"],
  }, 

});

module.exports = mongoose.model('Property', propertySchema);