import express from "express";
import boardRouter from "./boardModule.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("여기는 index 경로입니다");
});

indexRouter.use("/board", boardRouter);

export default indexRouter;
