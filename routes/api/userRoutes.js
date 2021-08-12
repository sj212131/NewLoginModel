const router = require("express").Router();
const { unsubscribe } = require(".");
const { User } = require("../../models");

router.get("/checkAuth", async (req, res) => {
  if (req.session.logged_in && req.session.user_id) {
    try {
      const loggedInUser = await User.findById(req.session.user_id);
      if (loggedInUser) {
        const { user_id, firstName, lastName, email } = loggedInUser;
        res.status(200).json({ id: _id, firstName, lastName, email });
      }
      res.status(404).end();
    } catch (err) {
      res.status(500).end();
    }
  }
  res.status(404).end();
});

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const userData = await user.save();
    req.session.user_id = userData.id;
    req.session.loggedInUser = true;

    const { _id, firstName, lastName, email } = userData;
    res.status(200).json({ _id, firstName, lastName, email });
  } catch (err) {
    res.status(400).json(err);
  }
});

// finish login function and log out funciton

module.exports = router;
