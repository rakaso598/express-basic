import express from "express";

const boardRouter = express.Router();

boardRouter.get("/", (req, res, next) => {
  try {
    res.send("여기는 board 경로입니다");
  } catch (err) {
    next(err);
  }
});

boardRouter.get("/:boardId", (req, res, next) => {
  const boardId = req.params.boardId;
  try {
    res.send(`ID가 ${boardId}인 게시판에 오셨습니다.`);
  } catch (err) {
    next(err);
  }
});

export default boardRouter;
