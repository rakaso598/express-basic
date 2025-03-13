import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  try {
    res.send("여기는 user 경로입니다");
  } catch (err) {
    next(err);
  }
});

userRouter.get("/:userId", (req, res, next) => {
  const userId = req.params.userId;
  try {
    res.send(`ID가 ${userId}인 유저에 오셨습니다.`);
  } catch (err) {
    next(err);
  }
});

export default userRouter;
