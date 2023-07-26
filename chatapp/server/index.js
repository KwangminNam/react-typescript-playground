// 웹소켓(WebSocket)은 하나의 TCP 접속에 전이중 통신 채널을 제공하는 컴퓨터 통신 프로토콜이다. 웹소켓 프로토콜은 2011년 IETF에 의해 RFC 6455로 표준화되었으며 웹 IDL의 웹소켓 API는 W3C에 의해 표준화되고 있다. 웹소켓은 HTTP와 구별된다.

const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});



// connection 이벤트 핸들러를 등록합니다. 이 이벤트는 클라이언트가 서버에 연결되었을 때 발생합니다. 즉, 새로운 사용자가 접속했을 때 해당 이벤트 핸들러가 실행됩니다. 사용자의 소켓 객체가 socket 매개변수로 전달됩니다.
// join_room 이벤트 핸들러를 등록합니다. 이 이벤트는 클라이언트가 특정 방에 들어가고자 할 때 발생합니다. 클라이언트가 특정 방에 접속하면, socket.join(data) 메소드를 사용하여 해당 방에 소켓을 입장시킵니다.
// send_message 이벤트 핸들러를 등록합니다. 이 이벤트는 클라이언트가 메시지를 보낼 때 발생합니다. 서버는 해당 메시지를 받으면, socket.to(data.room).emit("receive_message", data) 코드를 통해 같은 방에 속한 다른 클라이언트들에게 메시지를 전달합니다.
// disconnect 이벤트 핸들러를 등록합니다. 이 이벤트는 클라이언트가 연결을 해제했을 때 발생합니다. 즉, 사용자가 브라우저를 닫거나 페이지를 이동하여 연결을 끊었을 때 해당 이벤트 핸들러가 실행됩니다.
// 따라서, 브라우저를 같은 창에서 두 개를 띄우면 두 개의 클라이언트가 서버에 연결되게 됩니다. 각 클라이언트는 join_room 이벤트를 통해 같은 방에 들어가며, 한 클라이언트가 send_message 이벤트를 통해 메시지를 보내면, 서버는 해당 방에 속한 다른 클라이언트에게 receive_message 이벤트를 통해 메시지를 전달합니다. 이렇게 구현된 코드로 인해 두 클라이언트 사이에 실시간으로 메시지가 전달되는 것을 확인할 수 있습니다.






