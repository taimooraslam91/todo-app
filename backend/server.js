const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Router
const TodoRouter = require('./routes/todo.js');
const userRouter = require('./routes/user');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('API running');
});

app.use('/api/todo', TodoRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`TODO app backend listening on port ${PORT}`);
});
