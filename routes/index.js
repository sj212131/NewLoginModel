const { model } = require("mongoose");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

module.exports = router;
