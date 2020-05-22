const mongoose = require('mongoose');
 
const tankSchema = new mongoose.Schema({
  tankname: {
    type: String,
    required: true
  },
  crew: {
    type: Number,
    required: true
  },
  velocity: {
    type: Number,
    required: true
  },
  horsepower: {
    type: Number,
    required: true
}
});
 
const Tank = mongoose.model('Tank', tankSchema);
 
module.exports = Tank;

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     validate:
//     {
//       validator: ((v) => {
//         return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
//       })
//     } 
//   },
//   address: {
//     street: String,
//     suite: String,
//     city: String,
//     zipcode: String,
//     geo: {
//       lat: {
//         type: Number,
//       },
//       lng: {
//         type: Number,
//       }
//     }
//   }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;