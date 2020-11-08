const { Router } = require("express");
const router = new Router();

// get me with token
router.get("/", async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
