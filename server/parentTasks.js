const express = require('express')
const router = express.Router()
const dbObj = require('./database')


router.get('/', (req, res) => {
 //Get all parent tasks  
   dbObj.getParentTasks().then((parentTasks)=> {
    res.json(parentTasks)
   }).catch((err)=> {
    errobj = {errcode: 500, error: err}
    res.json(errobj)
   })
})

//get parent task for id
router.get('/:id', (req, res) => {
 //Get all Projects  
   dbObj.getParentTasks(req.params.id).then((parentTask)=> {
    res.json(parentTask)
   }).catch((err)=> {
    errobj = {errcode: 500, error: err}
    res.json(errobj)
   })
})


//Create new parent task
router.post('/', (req, res) => {   
   dbObj.insertParentTask(req.body).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       console.log(err)
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})

//delete parent task
router.delete('/:id', (req, res) => {   
   dbObj.deleteParentTask(req.params.id).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})


module.exports = router