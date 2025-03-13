import express from "express";
import boardRouter from "./boardModule.js";
import userRouter from "./userModule.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res, next) => {
  try {
    res.send("여기는 index 경로입니다");
  } catch (err) {
    next(err);
  }
});

indexRouter.use("/board", boardRouter);
indexRouter.use("/user", userRouter);

export default indexRouter;
