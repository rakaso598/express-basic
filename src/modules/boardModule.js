import express from "express";

const boardRouter = express.Router();

boardRouter.get("/", (req, res) => {
  res.send("여기는 board 경로입니다");
});

boardRouter.get("/:boardId", (req, res) => {
  const boardId = req.params.boardId;
  res.send(`ID가 ${boardId}인 게시판에 오셨습니다.`);
});

export default boardRouter;
