const Task = require('../models/Task');
const TaskStatus = require('../models/TaskStatus');

class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Crear nueva tarea - LÓGICA DE NEGOCIO AQUÍ
    createTask(title, description, dueDate) {
        // Validaciones de negocio
        if (!title || title.trim() === '') {
            throw new Error('El título es requerido');
        }

        if (!dueDate || new Date(dueDate) <= new Date()) {
            throw new Error('La fecha de vencimiento debe ser futura');
        }

        const task = new Task(
            null,
            title.trim(),
            description ? description.trim() : '',
            new Date(dueDate),
            TaskStatus.PENDING
        );

        return this.taskRepository.save(task);
    }

    // Listar tareas (con filtro opcional por estado)
    listTasks(status = null) {
        return this.taskRepository.findAll(status);
    }

    // Obtener tarea por ID
    getTaskById(id) {
        const task = this.taskRepository.findById(id);
        if (!task) {
            throw new Error('Tarea no encontrada');
        }
        return task;
    }

    // Actualizar estado de tarea - LÓGICA DE NEGOCIO AQUÍ
    updateTaskStatus(id, status) {
        // Validar que el estado sea válido
        if (!Object.values(TaskStatus).includes(status)) {
            throw new Error('Estado inválido');
        }

        const task = this.taskRepository.findById(id);
        if (!task) {
            throw new Error('Tarea no encontrada');
        }

        return this.taskRepository.updateStatus(id, status);
    }

    // Eliminar tarea
    deleteTask(id) {
        const task = this.taskRepository.findById(id);
        if (!task) {
            throw new Error('Tarea no encontrada');
        }

        return this.taskRepository.delete(id);
    }

    // Obtener tareas vencidas - LÓGICA DE NEGOCIO AQUÍ
    getOverdueTasks() {
        const currentDate = new Date();
        return this.taskRepository.findOverdue(currentDate);
    }
}

module.exports = TaskService;