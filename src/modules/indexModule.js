import express from "express";
import boardRouter from "./boardModule.js";
import userRouter from "./userModule.js";
import timestamp from "../middlewares/timestamp.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("여기는 index 경로입니다");
});

indexRouter.use("/board", timestamp, boardRouter);
indexRouter.use("/user", timestamp, userRouter);

export default indexRouter;
