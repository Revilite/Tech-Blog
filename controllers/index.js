const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home_routes");
const dashRoutes = require("./dash_routes");
const loginRoutes = require("./login_routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashRoutes);
router.use("/login", loginRoutes);

module.exports = router;
