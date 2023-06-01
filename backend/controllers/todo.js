import TodoModal from '../models/todo.js';

export const getTodoList = async (req, res) => {
  const todoList = await TodoModal.findAll({ order: [['updatedAt', 'DESC']] });
  res.status(200).json(todoList);
};

export const createTodoTask = async (req, res) => {
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

export const updateTodoTask = async (req, res) => {
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

export const deleteTodoTask = async (req, res) => {
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
