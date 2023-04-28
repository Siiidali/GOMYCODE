const bcrypt = require("bcrypt");

const comparePasswords = async (password, dbPassword) => {
  return await bcrypt.compare(password, dbPassword);
};

module.exports = { comparePasswords };
