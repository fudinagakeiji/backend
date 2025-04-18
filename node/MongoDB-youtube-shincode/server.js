const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");
app.use(foodRouter);

// db接続
mongoose
  .connect(
    "mongodb+srv://shincodeyoutube:abc@cluster0.8b8hp.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("データベース接続成功したよ"))
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("さーばきどうしたよ");
});
