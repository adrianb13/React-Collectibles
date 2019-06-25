const router = require("express").Router();

const userRoutes = require("./userRoutes");
const collRoutes = require("./collRoutes");

router.use("/users", userRoutes);
router.use("/collectibles", collRoutes);

module.exports = router;