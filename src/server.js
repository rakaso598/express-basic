import express from "express";
import indexRouter from "./modules/indexModule.js";
import notfound from "./middlewares/notfound.js";
import errorHandling from "./middlewares/errorHandling.js";

const server = express();
const PORT = 3010;

server.use(indexRouter);
server.use("/static", express.static("./src/public"));
server.use(notfound);
server.use(errorHandling);

server.listen(PORT, () => {
  console.log(`${PORT} 서버 실행중!`);
});
