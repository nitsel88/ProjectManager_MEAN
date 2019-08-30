const express = require('express')
const router = express.Router()
const dbObj = require('./database')


router.get('/', (req, res) => {
 //Get all tasks  
   dbObj.getTasks().then((tasks)=> {
    res.json(tasks)
   }).catch((err)=> {
    errobj = {errcode: 500, error: err}
    res.json(errobj)
   })
})

//get task for id
router.get('/:id', (req, res) => {
 //Get all Projects  
   dbObj.getTasks(req.params.id).then((task)=> {
    res.json(task)
   }).catch((err)=> {
    errobj = {errcode: 500, error: err}
    res.json(errobj)
   })
})

//update task task
router.put('/', (req, res) => {   
   dbObj.updateTask(req.body).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       console.log(err)
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})

//Create new task
router.post('/', (req, res) => {   
   dbObj.insertTask(req.body).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       console.log(err)
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})

//delete task
router.delete('/:id', (req, res) => {   
   dbObj.deleteTask(req.params.id).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})


module.exports = router