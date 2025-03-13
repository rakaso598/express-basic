function errorHandling(error, req, res, next) {
  console.log("에러 발생!", error.message);

  res.status(500).send("서버에서 에러가 발생했어요.");
}

export default errorHandling;
