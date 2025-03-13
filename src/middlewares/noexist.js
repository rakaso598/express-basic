function noexist(req, res, next) {
  res.status(404).send("리소스를 찾을 수 없습니다.");
}

export default noexist;
