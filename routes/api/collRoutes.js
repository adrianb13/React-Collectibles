const router = require("express").Router();
const apiController = require("../../controller/controller");
const jwtMiddleware = require("../../lib/jwtMiddleware");

router
  .route("/")
  .post(jwtMiddleware, apiController.addCollectible);

router
  .route("/:id")
  .get(jwtMiddleware, apiController.getCollectible)
  .put(jwtMiddleware, apiController.updateCollectible)
  .delete(jwtMiddleware, apiController.deleteCollectible);

  module.exports = router;