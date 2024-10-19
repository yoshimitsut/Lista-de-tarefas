const taskListModel = require("../models/taskListModel")

module.exports = {
    //GET /app
    index: (req, res) => {
        const taskLists = taskListModel.getAllTaskLists()
        res.render('app', { taskLists })
    },

    //GET /app/nova-lista
    createTaskList:  (req, res) => {
        res.render('createTaskList.ejs')
    },

    //POST /app/nova-lista
    save: (req, res) => {
        const { title } = req.body
        const newList = taskListModel.createList(title)
        taskListModel.saveList(newList)

        res.redirect('/app')
    },

    //GET /app/:id
    showTask: (req, res) => {
        const {id} = req = req.params
        if (!id) throw new Error('Lista de tarefas não encontrada!')
        const taskList = taskListModel.getTaskListById(id)
        res.render('showTask', { taskList })
    },

    //POST /app/:id/excluir
    delete: (req, res) => {
        const {id} = req.params
        taskListModel.deleteList(id)
        res.redirect('/app')
    }

}

