const express = require('express');
const router = express.Router();

// Importar dependencias - SIGUIENDO LA ARQUITECTURA EN CAPAS
const MemoryTaskRepository = require('../repositories/MemoryTaskRepository');
const TaskService = require('../services/TaskService');
const TaskController = require('../controllers/TaskController');

// Inicializar dependencias en el orden correcto
const taskRepository = new MemoryTaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

// Definir rutas - TODOS LOS ENDPOINTS REQUERIDOS
router.post('/', taskController.createTask);           // POST /tasks
router.get('/', taskController.listTasks);             // GET /tasks
router.patch('/:id/status', taskController.updateTaskStatus); // PATCH /tasks/:id/status  
router.delete('/:id', taskController.deleteTask);      // DELETE /tasks/:id
router.get('/overdue', taskController.getOverdueTasks); // GET /tasks/overdue

module.exports = router;