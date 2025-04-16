const express = require("express");
const router = express.Router();

// router.use(mylogger);
router.get("/", mylogger, (req, res) => {
  res.send("ゆーざだよ");
});

router.get("/info", (req, res) => {
  res.send("ゆーざ情報だよ");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}の情報をうけとったわん`);
});

// ミドルウェア
function mylogger(req, res, next) {
  // URLをコンソールに出してる。読んでるのは一番上だけどapp.getは何も止まっていない。
  console.log(req.originalUrl);
  next();
}
module.exports = router;
