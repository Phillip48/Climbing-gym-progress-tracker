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
      max_length: 20,
    },
    lastName: {
      type: String,
      required: true,
      max_length: 20,
    },
    email: {
      type: String,
      required: true,
      max_length: 20,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
      max_length: 20,
    },
    maxBoulderingGrade: {
      type: String,
      required: true,
      max_length: 5,
    },
    maxTopRopingGrade: {
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
    // Might be needed for a user to have sends and projects to his name
    sends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'send',
      },
    ],
    climbingSessions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'climbingSession',
      },
    ],
    trainingSessions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'trainingSession',
      },
    ],
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'project',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
