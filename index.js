const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todoRoutes = require('./routes/todos');

app.get('/', (req, res) => {
  res.send('Hello From the ROOT route');
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));