const mongoose = require('mongoose')
const Tank = require('./tank.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/example"

const connectDb = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    // useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
    });
};

module.exports = {
  connectDb,
  models: {
    Tank
  }
} 