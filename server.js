import express from "express";
import indexRouter from "./src/modules/indexModule.js";
import noexist from "./src/middlewares/noexist.js";
import errorHandling from "./src/middlewares/errorHandling.js";

const server = express();
const PORT = 3010;

server.use(indexRouter);
server.use("/static", express.static("./src/public"));
server.use(noexist);
server.use(errorHandling);

server.listen(PORT, () => {
  console.log(`${PORT} 서버 실행중!`);
});
