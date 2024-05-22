const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  adresse: String,
  tel: String,
  role: { 
    type: String, 
    enum: ['user', 'admin'],
    default: 'user'
  }
});

// Avant de sauvegarder l'utilisateur dans la base de données, hachez son mot de passe
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); // Le deuxième paramètre est le coût du hachage
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
