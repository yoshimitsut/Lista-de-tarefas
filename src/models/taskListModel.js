let taskLists = [
    {id: '1', title: 'Estudos 1', tasks: [{ id: '1', title: 'Estudar Node', completed: false}]},
    {id: '2', title: 'Estudos 2', tasks: []},
    {id: '3', title: 'Estudos 3', tasks: [{ id: '2', title: 'Estudar 2', completed: false}]}
]

module.exports = {
    getAllTaskLists: () => {
        return taskLists
    },

    getTaskListById: (id) => {
        return taskLists.find(list => list.id === id)
    },
    
    createList: (title) => {
        const newList = {
            id: Math.floor(Math.random() * 99999999).toString(),
            title: title,
            tasks: []
        }
        return newList
    },
    
    saveList: (taskList) => {
        if (taskList.title === '') throw new Error('Título da lista não pode ser vazio.')
        taskLists.push(taskList)
    },

    deleteList: (listId) => {
        const listIndex = taskLists.findIndex(list => list.id === listId)
        taskLists.splice(listIndex, 1)
    },

    addTask: (listId, taskTitle) => {
        const newTask = {
            id: Math.floor(Math.random()*99999).toString(),
            title: taskTitle,
            completed: false
        }
        taskLists.find(list => list.id === listId).tasks.push(newTask)
    }


    




}
