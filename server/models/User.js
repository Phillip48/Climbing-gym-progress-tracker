const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      max_length: 10,
      unique: true,
    },
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
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
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
    bio: {
      type: String,
      max_length: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now,
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
