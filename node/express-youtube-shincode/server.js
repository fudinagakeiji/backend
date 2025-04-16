// console.log("express");
const express = require("express");
const app = express();
const userRouter = require("./routes/user.js");

const PORT = 3000;

// app.use(mylogger);

// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("hello expres");
  // res.send("こんちは");
  // res.send("<h1>  こんちは</h1>");
  // res.sendStatus(500);

  //ブラウザのコンソール◡̈のメッセージがでる。：　 Failed to load resource: the server responded with a status of 500 (Internal Server Error)
  // res.status(500).send("えらーかも。");
  // res.status(500).json({ msg: "えらーなのよ" });
  res.render("index", { text: "nodejsとexpress" });
});

// ルーティング
app.use("/user", userRouter);
// app.use("/auth", authRouter);こういうふうに増やすことができる。

app.listen(PORT, () => {
  console.log("さーばきどうしたよ");
});
