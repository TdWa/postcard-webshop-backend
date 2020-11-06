const express = require("express");
const app = express();
const PORT = 4000;
app.set("json spaces", 2);

const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const orderRouter = require("./routers/orderRouter");

app.use(express.json());
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
