const toggleTask = (taskId, tasks, setTasks) => {
    setTasks(prevTasks => {

        // Verrrifeir mais faire un task.fetch(( '' ) aurait pu marcher
        // Verrifier le code de yasmine si jamais
        // Utilisation de map pour créer une nouvelle liste de tâches avec la tâche mise à jour
        const updatedTasks = tasks.map(task => {
            // Vérifie si la tâche actuelle correspond à l'ID de la tâche à basculer
            if (task.id === taskId) {
                // Affiche le contenu de la tâche actuelle
                console.log(task.content);

                // Retourne une copie de la tâche avec la propriété isDone mise à jour
                return { ...task, isDone: !task.isDone };
            }

            // Retourne la tâche inchangée si son ID ne correspond pas à celui de la tâche à basculer
            return task;
        });

        // Déclenche le filtre des tâches après un certain délai
        setTimeout(() => {
            setTasks(prevTasks => prevTasks.filter(todo => todo.id !== taskId));
        }, 150);

        // Retourne la nouvelle liste de tâches mise à jour
        return updatedTasks;
    });
};

export default toggleTask;