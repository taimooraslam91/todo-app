import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { testConnection } from './config/db.js';
import { dropTables, createTables } from './models/index.js';

// Router
import TodoRouter from './routes/todo.js';

const app = express();
dotenv.config();
testConnection();
// createTables();

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('API running');
});

app.use('/api/todo', TodoRouter);

app.listen(PORT, () => {
  console.log(`TODO app backend listening on port ${PORT}`);
});
