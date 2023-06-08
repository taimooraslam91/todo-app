const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  signup,
  login,
  protectedRoute,
} = require('../controllers/user');
const { authenticateUser } = require('../middleware/auth');

const router = express.Router();

// @desc   Fetch all users
// @route  GET /api/user
// @access Public
router.get('/', getUsers);

// @desc   Fetch user by id
// @route  GET /api/user/:id
// @access Public
router.get('/:id', getUser);

// @desc   Create user
// @route  POST /api/user/
// @access Public
router.post('/', createUser);

// @desc   Sign-up user
// @route  POST /api/user/sign-up
// @access Public
router.post('/sign-up', signup);

// @desc   Login user
// @route  POST /api/user/login
// @access Public
router.post('/login', login);

// @desc   Update user
// @route  PUT /api/user/
// @access Public
router.put('/:id', updateUser);

// @desc   Delete user by id
// @route  DELETE /api/user/:id
// @access Public
router.delete('/:id', deleteUser);

// @desc   GET protected route test
// @route  GET /api/user/protected
// @access Public
router.get('/protected', authenticateUser, protectedRoute);

module.exports = router;
