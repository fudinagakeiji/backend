// Node.js に標準で備わっている "http" モジュールを読み込む。
// これを使ってWebサーバーを作れるようになる。
const http = require("http");

// サーバーが動くポート番号（出入口の番号）を 8000 に設定。
const PORT = 8000;

// "fs"（ファイルシステム）モジュールで、同じフォルダにある "index.html" を読み込む。
// ファイルの中身を変数 html に保存（この時点で中身は文字列として入っている）。
const html = require("fs").readFileSync("./index.html");

// Webサーバーを作る。アクセスがあった時の処理を関数で定義。
const server = http.createServer((req, res) => {
  // ブラウザに返すレスポンスの種類（HTML）と成功のステータス（200 OK）を設定。
  res.writeHead(200, { "Content-Type": "text/html" });

  // ↓ HTMLを直接書いて返す代わりに…
  // res.write("<h1>hello keiji</h1>");

  // 読み込んだ "index.html" の中身をレスポンスとして返す。
  res.write(html);

  // レスポンスを終了する（これで返された内容がブラウザに表示される）。
  res.end();
});

// サーバーを起動して、8000番ポートで待ち受けを開始。
// 起動に成功したら「ruuuuuuuuun」とターミナルに表示。
server.listen(PORT, () => {
  console.log("ruuuuuuuuun");
});
