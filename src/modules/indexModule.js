import express from "express";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("여기는 index 경로입니다");
});

export default indexRouter;
