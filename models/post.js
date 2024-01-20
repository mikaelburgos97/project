const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    id: {
      type: String
    },
    userId: {
      type: String
    },
    content: {
      type: String
    },
    tag: {
      type: String
    },
    likes: {
      type: String
    }, 
    dislikes: {
      type: String
    },
    createdAt: {
      type: String
    },
  },
  {
    timeStamps: true
  }
)

const User = mongoose.model('User', userSchema);

module.exports = User;