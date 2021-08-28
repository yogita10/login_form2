
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  text:{
    type: String,
    required: true
  },
  address:{
    type:String 
  },
  donate:{
    type:String,
    required:true
  },
  quantity:{
    type:Number, 
    required:true 
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

 
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
