const mongoose =require('mongoose');


const user = new mongoose.Schema({
  id: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  is_admin: {
    type: Boolean
  }
});

const User = mongoose.model('user', user);

module.exports = User;

