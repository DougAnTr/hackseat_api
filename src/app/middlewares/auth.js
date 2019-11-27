export default async (req, res, next) => {
  req.userID = req.query.user_id;

  return next();
};
