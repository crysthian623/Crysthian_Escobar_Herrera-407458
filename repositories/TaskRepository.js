// Interfaz que define los métodos que debe implementar el repositorio
class TaskRepository {
    save(task) {
        throw new Error('Método save debe ser implementado');
    }

    findAll(status) {
        throw new Error('Método findAll debe ser implementado');
    }

    findById(id) {
        throw new Error('Método findById debe ser implementado');
    }

    delete(id) {
        throw new Error('Método delete debe ser implementado');
    }

    findOverdue(currentDate) {
        throw new Error('Método findOverdue debe ser implementado');
    }
}

module.exports = TaskRepository;