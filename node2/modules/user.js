const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/testWPDB',
{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);//this line was added in response to deprication warning
const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: [true, "This email is already in use"], required: true},
  salt: String,//no need to save the salt it is already a part of password hash
  password: String
});
//let's add pre-save hook; it runs before a document is saved into a collection
userSchema.pre('save', function () {
  const saltRounds = 10;
  this.salt = bcrypt.genSaltSync(saltRounds);
  this.password = bcrypt.hashSync(this.password, this.salt);
});

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema); //a class and DB collection is created
module.exports = User;
