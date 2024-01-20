const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    id: {
      type: String
    },
    userName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    firstName: {
      type: String
    }, 
    lastName: {
      type: String
    },
    age: {
      type: String
    },
    img: {
      type: String
    }
  },
  {
    timeStamps: true
  }
)

const User = mongoose.model('User', userSchema);

module.exports = User;