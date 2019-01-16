const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/todos');

router.route('/')
  .get(helpers.getAllTodos)
  .post(helpers.createTodo)

router.route('/:todoId')
  .get(helpers.getOneTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

module.exports = router;