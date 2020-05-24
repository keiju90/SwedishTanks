const express = require('express')
const router = express.Router()

const tank = require('./tank.js')

router.post("/tanks", tank.post)
router.get("/tanks", tank.get)
router.get("/tanks/:id", tank.getById)
router.delete("/tanks/:id", tank.deleteById)
router.put("/tanks/:id", tank.put)
router.patch("/tanks/:id", tank.patch)

module.exports = router