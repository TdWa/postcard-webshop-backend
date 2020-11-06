const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

app.set("json spaces", 2);
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  console.log(users);
  res.send(users);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
