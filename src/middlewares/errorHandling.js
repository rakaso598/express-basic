function errorHandling(error, req, res, next) {
  console.log("에러 발생!", error.message);
  // 에러 메시지에 따라 에러처리 분기 추가 가능

  res.status(500).send("서버에서 에러가 발생했어요.");
}

export default errorHandling;
