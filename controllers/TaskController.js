class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    // POST /tasks - SOLO MANEJO DE HTTP
    createTask = (req, res) => {
        try {
            const { title, description, dueDate } = req.body;
            
            // Delegar toda la lógica al Service
            const task = this.taskService.createTask(title, description, dueDate);
            
            res.status(201).json({
                message: 'Tarea creada exitosamente',
                task: task
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // GET /tasks - SOLO MANEJO DE HTTP
    listTasks = (req, res) => {
        try {
            const { status } = req.query;
            // Delegar al Service
            const tasks = this.taskService.listTasks(status);
            
            res.json({
                count: tasks.length,
                tasks: tasks
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // PATCH /tasks/:id/status - SOLO MANEJO DE HTTP
    updateTaskStatus = (req, res) => {
        try {
            const { id } = req.params;
            const { status } = req.body;
            
            // Delegar al Service
            const task = this.taskService.updateTaskStatus(parseInt(id), status);
            
            res.json({
                message: 'Estado de tarea actualizado exitosamente',
                task: task
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // DELETE /tasks/:id - SOLO MANEJO DE HTTP
    deleteTask = (req, res) => {
        try {
            const { id } = req.params;
            
            // Delegar al Service
            this.taskService.deleteTask(parseInt(id));
            
            res.json({ message: 'Tarea eliminada exitosamente' });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // GET /tasks/overdue - SOLO MANEJO DE HTTP
    getOverdueTasks = (req, res) => {
        try {
            // Delegar al Service
            const tasks = this.taskService.getOverdueTasks();
            
            res.json({
                count: tasks.length,
                tasks: tasks
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = TaskController;