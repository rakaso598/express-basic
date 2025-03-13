function timestamp(req, res, next) {
  const time = `${Date.now()}`;
  console.log(time);

  next();
}

export default timestamp;
