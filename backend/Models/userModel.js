const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  adresse: String,
  tel: String,
  role: { 
    type: String, 
    //enum permet une extensibilité future si d'autres rôles sont ajoutés.
    enum: ['user', 'admin'], // Les valeurs autorisées sont 'user' et 'admin'
    default: 'user' // Valeur par défaut
  }
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
