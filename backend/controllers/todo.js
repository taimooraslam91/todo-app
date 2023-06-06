const TodoModal = require('../models/todo.js');

const getTodoList = async (req, res) => {
  const todoList = await TodoModal.findAll({ order: [['updatedAt', 'DESC']] });
  res.status(200).json(todoList);
};

const createTodoTask = async (req, res) => {
  const data = req.body;
  try {
    const todo = await TodoModal.create({
      title: data.title,
      description: data.description,
      status: data.status,
    });
    res.status(200).json(todo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateTodoTask = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const todo = await TodoModal.update(data, {
      where: {
        id: id,
      },
    });
    res.status(200).json(todo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteTodoTask = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await TodoModal.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(todo);
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getTodoList,
  createTodoTask,
  updateTodoTask,
  deleteTodoTask,
};
