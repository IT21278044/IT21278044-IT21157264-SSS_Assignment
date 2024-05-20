const User = require('../models/User');
const { passwordValidator } = require('../utils/passwordValidator.js');

const createUser = async (req, res) => {
  const { username, email, password, picture } = req.body;

  // Validate password
  const { isValid, errors } = passwordValidator(password);
  if (!isValid) {
    return res.status(400).json({ error: errors.join(' ') });
  }

  try {
    const newUser = await User.create({ username, email, password, picture });
    res.status(201).json(newUser);
  } catch (error) {
    const errorMessage = error.code === 11000 ? 'User already exists' : error.message;
    res.status(400).json({ error: errorMessage });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUser, loginUser };
