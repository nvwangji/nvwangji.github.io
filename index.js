var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);
http.listen(3000, function () {
  console.log("listening on *:3000");
});
app.get('/', function(req, res){
  //res.send('<h1 >new message</h1>');
  res.sendFile(__dirname + "/index.html");
});
app.all("/json", function (req, res) {
 res.json('m');
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
