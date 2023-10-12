const express=require('express')
const router=express.Router();
const{getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTasks,
    // editTask,
}=require('../controllers/tasks');
const { update } = require('../models/Task');

router.route('/').get(getAllTasks).post(createTask)
router.
route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTasks)
// .put(editTask)


module.exports=router