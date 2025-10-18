const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Importar rutas
const taskRoutes = require('./routes/taskRoutes');

// Usar rutas - SIGUIENDO LOS ENDPOINTS ESPERADOS
app.use('/tasks', taskRoutes);

// Ruta de salud
app.get('/', (req, res) => {
    res.json({ 
        message: 'Sistema de Gestión de Tareas - API',
        endpoints: {
            'POST /tasks': 'Crear nueva tarea',
            'GET /tasks': 'Listar tareas (usar ?status=PENDING para filtrar)',
            'PATCH /tasks/:id/status': 'Actualizar estado de tarea',
            'DELETE /tasks/:id': 'Eliminar tarea',
            'GET /tasks/overdue': 'Obtener tareas vencidas'
        }
    });
});

// Manejo de rutas no encontradas - CORREGIDO
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
    console.log(`Sistema de Gestión de Tareas listo para usar`);
});