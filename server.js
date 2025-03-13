import express from "express";
import indexRouter from "./src/modules/indexModule.js";

const server = express();
const PORT = 3010;

server.use(indexRouter);

server.listen(PORT, () => {
  console.log(`${PORT} 서버 실행중!`);
});
