const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  // let the route handler execute
  await next();

  // after the handler we will clear the hash
  clearHash(req.user.id);
};
