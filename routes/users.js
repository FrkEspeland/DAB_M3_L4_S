var express = require('express');
var router = express.Router();
var db = require("../models");
var UserService = require("../services/UserService")
var userService = new UserService(db);
var { canSeeUserDetails } = require("./authMiddlewares")

/* GET users listing. */
router.get('/:userId', canSeeUserDetails, async function(req, res, next) {
  try {
    const user = await userService.getOne(req.params.userId);
    console.log("Retrieved user:", user); // Log the retrieved user object
    res.render('userDetails', { user: user });
  } catch (error) {
    console.error("Error retrieving user details:", error);
    next(error); // Pass the error to the error handler middleware
  }
});


module.exports = router;