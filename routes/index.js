const express = require('express')
const router = express.Router()

const tank = require('./tank.js')
//const posts = require('./posts.js');
const start = require('./start.js');
router.get("/", start.welcome);

router.post("/tanks", tank.post)
router.get("/tanks", tank.get)
router.get("/tanks/:id", tank.getById)
router.delete("/tanks/:id", tank.deleteById)
router.put("/tanks/:id", tank.put)
router.patch("/tanks/:id", tank.patch)

// router.get("/posts", posts.getPosts);
// router.get("/posts/:postsId", posts.getPosts);
// router.post("/posts", posts.postPosts);
// router.put("/posts/:postsId", posts.getPosts);
// router.patch("/posts/:postsId", posts.patchPosts);
// router.delete("/posts/:postsId", posts.deletePosts);

module.exports = router