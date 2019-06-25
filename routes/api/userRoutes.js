const router = require("express").Router();
const apiController = require("../../controller/controller.js");
const jwtMiddleware = require("../../lib/jwtMiddleware");

router
  .route("/")
  .get(jwtMiddleware, apiController.findAllUsers)
  .post(apiController.createUser);

router
  .route("/login")
  .post(apiController.findUser);

module.exports = router;