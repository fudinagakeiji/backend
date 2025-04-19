const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, console.log("サーバ起動した"));

app.get("/", (req, res) => {
  res.send("プログラミングちゅーとりあるへようこそ");
});

const customers = [
  { name: "keiji", id: 1 },
  { name: "reiji", id: 2 },
  { name: "airi", id: 3 },
  { name: "eiri", id: 4 },
];

// データ取得
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.get("/api/customer/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  res.send(customer);
});

// データを送信（作成）

app.post("/api/customers", (req, res) => {
  const customer = { name: req.body.name, id: customers.length + 1 };
  customers.push(customer);
  res.send(customers);
});

// データ更新

app.put("/api/customer/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.name = req.body.name;
  res.send(customer);
});

// データ削除
app.delete("/api/customer/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));

  const index = customers.indexOf(customer);
  customers.splice(index, 1);
  res.send(customer);
});
