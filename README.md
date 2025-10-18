**Decisiones de diseño**


Arquitectura en Capas:

Usé una arquitectura por capas donde tenemos las carpetas de Controllers → Services → Repositories → Models para poder organizar mejor el proyecto.
Cada una de estas capas (carpetas) tiene su función en este caso los controllers solo se encargan de manejar las peticiones y respuestas HTTP, la lógica principal del programa está en los services, y el acceso a los datos se maneja por medio del Repository.
Esto ayuda a que el código sea más fácil de mantener, probar y mejorar en el futuro si asi se requiere.

Patrón Repository e Inyección de Dependencias:

Apliqué el patrón Repository creando una interfaz base llamada "TaskRepository" y una clase que la implementa (MemoryTaskRepository).
De esta forma, si más adelante deseo cambiar la forma en que se guardan los datos, por ejemplo usar una base de datos en lugar de memoria no tendría que modificar el resto del código.
También usé inyección de dependencias para pasar el repository al service, lo que facilita probar las funciones y seguir buenas prácticas de programación.

Validaciones en la Capa de Services:

Todas las validaciones del negocio como lo es verificar fechas, estados válidos o si hay alguna tarea que ya existe se hacen dentro de la capa Service.
Esto cumple con la reglas y restricciones de no poner lógica de negocio en los controllers y mantiene todas las reglas del sistema en un solo lugar, evitando repetir código.
