const express = require('express')
const router = express.Router()
const dbObj = require('./database')


router.get('/', (req, res) => {

 //Get all users  
   dbObj.getUsers().then((users)=> {
    res.json(users)
   }).catch((err)=> {
    errobj = {errcode: 500, error: err}
    res.json(errobj)
   })
})

//Get user for the employee id
router.get('/:id', (req, res) => {
   dbObj.getUsers(req.params.id).then((dbres)=> {
    res.json(dbres)
   }).catch((err)=> {
    errobj = {errcode: 500, error: err}
    res.json(errobj)
   })
})

//Create new user
router.post('/', (req, res) => {   
   dbObj.insertUser(req.body).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})

//update user
router.put('/', (req, res) => {   
   dbObj.updateUser(req.body).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})

//delete user
router.delete('/:id', (req, res) => {   
   dbObj.deleteUser(req.params.id).then((dbres) => {
       console.log(dbres)
       res.json(dbres)
   }).catch ((err) => {
       errobj = {errcode: 500, error: err}
       res.json(errobj)
   })
})

module.exports = router