const mongoose = require('mongoose');

const connectDB = async () =>{
  try{
    const conn = await mongoose.connect(
      'mongodb+srv://samuelgigant:Salaluel974@cluster0.7kpnoif.mongodb.net/svl?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB Connected`); 
    }catch(err){
      console.error(err);
      process.exit(1);
  }
};
    module.exports = connectDB;
