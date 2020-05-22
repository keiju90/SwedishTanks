get=(req,res,next)=>{
req.models.Tank.find().then((tanks)=>{
returnres.send(tanks);
}).catch((error)=>{
next(error)
})
}
 
post=(req,res,next)=>{
req.models.Tank.create({
  tankname: req.body.tankname,
  crew: req.body.crew,
  velocity: req.body.velocity,
  horsepower: req.body.horsepower
 //tankname:{
// crew:req.body.tankname.crew,
 //velocity:req.body.tankname.velocity,
 //horsepower:req.body.tankname.horsepower
//}
}).then((tank)=>{
returnres.status(201).send(tank)
}).catch((error)=>{
next(error)
})
}
 
getById=(req,res,next)=>{
req.models.Tank.findById(req.params.id).then((tank)=>{
returnres.send(tank);
})
}
 
module.exports ={
get,
post,
getById,
}





// get = (req, res, next) => {
//   req.models.User.find().then((users) => {
//     return res.send(users);
//   }).catch((error) => {
//     next(error)
//   })
// }

// post = (req, res, next) => {
// req.models.User.create({
//   name: req.body.name,
//   username: req.body.username,
//   email: req.body.email,
//   address: {
//     street: req.body.address.street,
//     suite: req.body.address.suite,
//     city: req.body.address.city,
//     zipcode: req.body.address.zipcode,
//     geo: {
//       lat: req.body.address.geo.lat,
//       lng: req.body.address.geo.lng,
//     }
//   }
// }).then((user) => {
//   return res.status(201).send(user)
// }).catch((error) => {
//   next(error)
// })
// }

// getById = (req, res, next) => {
// req.models.User.findById(req.params.id).then((user) => {
//   return res.send(user);
// })
// }

// module.exports = {
// get,
// post,
// getById,
// }