const router = require("express").Router();
const apiController = require("../../controller/controller");
const jwtMiddleware = require("../../lib/jwtMiddleware");

router
  .route("/")
  .post(apiController.addCollectible);

router
  .route("/:id")
  .get(apiController.getCollectible)
  .put(apiController.updateCollectible)
  .delete(apiController.deleteCollectible);

  module.exports = router;