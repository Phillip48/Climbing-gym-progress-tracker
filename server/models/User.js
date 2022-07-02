const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      max_length: 50,
    },
    lastName: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    password: {
      type: String,
      required: true,
      max_length: 50,
    },
    maxGrade: {
      type: String,
      required: true,
      max_length: 5,
    },
    
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
