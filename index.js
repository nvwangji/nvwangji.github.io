var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hp",
});

connection.connect();
http.listen(3000, function () {
  console.log("listening on *:3000");
});
app.get('/', function(req, res){
  //res.send('<h1 >new message</h1>');
  res.sendFile(__dirname + "/index.html");
});
app.all("/login", function (req, res) {
  var sql = "SELECT * FROM newTable";
  //查
  connection.query(sql, function (err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    res.json(result);
  });
  
});
app.all("/music", function (req, res) {
   res.download(__dirname + "/qlx.mp3");
  
});
io.on("connection", function (socket) {
  console.log("an user connected");
});

io.on("connection", function (socket) {
  
   socket.broadcast.emit("connection", '用户'+socket.id.slice(0, 6) + "已连接");
   socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });
});