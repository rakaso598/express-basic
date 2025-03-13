import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("여기는 user 경로입니다");
});

userRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`ID가 ${userId}인 유저에 오셨습니다.`);
});
export default userRouter;
