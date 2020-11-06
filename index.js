const express = require("express");
const app = express();
const PORT = 4000;
app.set("json spaces", 2);

app.use(express.json());

const User = require("./models").user;

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  users.map((u) => console.log(u.get({ plain: true })));
  res.send(users);
});

app.post("/users", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
