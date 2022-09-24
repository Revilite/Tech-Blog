const router = require("express").Router();

const userRoutes = require("./user_routes.js");


router.get("/", (req, res) =>{
    res.send("Hello World");
})

router.use("/users", userRoutes);


module.exports = router;