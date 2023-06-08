const express = require('express');
const {
  getTodoList,
  createTodoTask,
  updateTodoTask,
  deleteTodoTask,
} = require('../controllers/todo.js');
const router = express.Router();

// @desc   Fetch all todo
// @route  GET /api/todo
// @access Public
router.get('/', getTodoList);

// @desc   Create a Todo task
// @route  Post /api/todo
// @access Public
router.post('/', createTodoTask);

// @desc   Update a Todo task
// @route  Put /api/todo/:id
// @access Public
router.put('/:id', updateTodoTask);

// @desc   Delete a Todo task
// @route  delete /api/todo/:id
// @access Public
router.delete('/:id', deleteTodoTask);

module.exports = router;
