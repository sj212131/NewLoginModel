const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {},
  lastName: {},
  email: {},
  password: {},
});
