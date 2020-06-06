//dotify = require('node-dotify');

get = (req, res, next) => {
  var query;
  if(req.query.tankname) {
    query = req.models.Tank.find({tankname: req.query.tankname})
  }
  else
  {
    query = req.models.Tank.find()
  }


  query.exec().then((tanks) => {
      return res.send(tanks);
    }).catch((error) => 
	next(error)
    )}
let number = 0;
post=(req,res,next)=>{
  req.models.Tank.create({
  tankname: req.body.tankname,
  crew: req.body.crew,
  velocity: req.body.velocity,
  horsepower: req.body.horsepower,
  tankId: number +1
 //tankname:{
// crew:req.body.tankname.crew,
 //velocity:req.body.tankname.velocity,
 //horsepower:req.body.tankname.horsepower
//}
}).then((tank)=> {
return res.status(201).send(tank)
}).catch((error)=>{
next(error)})
}
 
getById=(req,res,next) => {
req.models.Tank.findById(req.params.id).then((tank) => {
return res.send(tank);
}).catch((error) => next(error))
}

deleteById = (req, res, next) => {
  req.models.Tank.findByIdAndDelete(req.params.id).then((deleted)=> {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}

put = (req, res, next) => {
  req.models.Tank.updateOne({_id: req.params.id},
    {
      tankname: req.body.tankname,
      crew: req.body.crew,
      velocity: req.body.velocity,
      horsepower: req.body.horsepower,
      tankId:req.body.tankId

    },{
      new: true,
      upsert: true,
      runvalidators: true,
    }).then((status) => {
      console.log("status: ", status)
      if (status.upserted) {
        res.status(201)
      } else if (status.nModified) {
        res.status(200)
      } else {
        res.status(204)
      }
      req.models.Tank.findById(req.params.id).then((tank) => {
        res.send(tank)
      })
    }).catch((error) => next(error))
}

const patch = (req, res, next) => {
  console.log(dotify(req.body))
/*
  Dotify translates this:
  {
   "name": "name other than my name",
   "address" : {
      "street": "coolz street"
   }
  }
  to this:
  { 
   "name": "name other than my name",
   "address.street": "coolz street"
  }
  replacing the key street in the object address with the new value, 
  instead of replacing the entire address object
*/
  
  req.models.Tank.findByIdAndUpdate(req.params.id,
  { 
    $set: dotify(req.body)
  },
  {
    returnNewDocument: true,
    new: true,
  }).then((tank) => {
    console.log("tank after request:", tank)
    res.send(tank)
  }).catch((error) => next(error))
}

module.exports = {
  get,
  post,
  getById,
  deleteById,
  put,
  patch
}