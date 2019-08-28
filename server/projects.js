const express = require('express')
const router = express.Router()
const dbObj = require('./database')


router.get('/', (req, res) => {

 //Get all Projects  
   dbObj.getProjects().then((projects)=> {
    res.json(projects)
   }).catch((err)=> {
    errobj = {errcode: 500, error: err}
    res.json(errobj)
   })
})

//Create new Project
router.post('/', (req, res) => {   
   dbObj.insertProject(req.body).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       console.log(err)
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})



module.exports = router