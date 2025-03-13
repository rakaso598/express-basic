import express from "express";
import indexRouter from "./src/modules/indexModule.js";
import noexist from "./src/middlewares/noexist.js";

const server = express();
const PORT = 3010;

server.use(indexRouter);
server.use("/static", express.static("./src/public"));
server.use(noexist);

server.use((error, req, res, next) => {
  console.log("에러 발생!", error.message);

  res.status(500).send("서버에서 에러가 발생했어요.");
});

server.listen(PORT, () => {
  console.log(`${PORT} 서버 실행중!`);
});
