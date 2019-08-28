// Retrieve
const assert = require("assert");
var MongoClient = require('mongodb').MongoClient
var ObjectID  = require('mongodb').ObjectID

const DATABASE_NAME = "projmgmt"
let dbInstance

//initialize DB connec  tion
function initDb(callback) {
   if (dbInstance) {
        console.warn("Trying to init DB again!")
        return callback()
   }

// Connect to the db
MongoClient.connect("mongodb://localhost:27017", 
{ useNewUrlParser: true,  
  useUnifiedTopology: true },  
  function(err, client) {
    if (err) throw err;
    
    db = client.db(DATABASE_NAME);
    console.log("Connected to database:" + DATABASE_NAME)
    dbInstance = db;
    return callback();

  })
}


//Get DB instance
function getDb() {
    assert.ok(dbInstance, "Db has not been initialized. Please called init first.");
    return dbInstance;
}



//insert user details
function insertUser (user) {
    return new Promise((resolve, reject)=> {
    db = getDb()

    db.collection("users").insertOne(user, function(err, res) {
    if (err) { 
      reject (err)
    }
    console.log("user inserted: " + user);
    resolve({userId: user.empId }) 
    })
  })
}

//insert user details
function updateUser (user) {
    return new Promise((resolve, reject)=> {
    db = getDb()

    console.log("update request received:"+ JSON.stringify(user))
    _id = user._id;
    delete user._id;     
    db.collection("users").updateOne({"_id": ObjectID(_id)}, {$set: user}).then(result => {
      const { matchedCount, modifiedCount } = result;

      if(matchedCount && modifiedCount) {
          console.log("user updated: " + user.empId);
          resolve({userId: user.empId })
       } 
     }).catch(err => {
         reject (err)
     })
  })
}

//get list of users
function getUsers (id) {
  return new Promise((resolve, reject)=> {
  db = getDb()
  if (id) {
    queryString = {empId: id}
  } else {
     queryString = {}
  }
  db.collection("users").find(queryString).toArray(function(err, users) {
    if (err) { 
      reject (err)
    }
  console.log("Found the following users");
  console.log(users)

  resolve(users);
  });
 })
}

//delete user
function deleteUser(id) {
    return new Promise((resolve, reject)=> {
    db = getDb()
    const query = {empId: id}
    db.collection("users").deleteOne(query, function(err, res) {
    if (err) { 
      reject (err)
    }
    console.log("user with id:"+ id + "deleted");
    resolve({userId: id }) 
    })
  })
}

function getMaxProjId() { 
     return new Promise((resolve, reject)=> { 
     db = getDb() 
       db.collection("projects").find({}).sort({ "projectId": -1 }).limit(1).toArray(function(err, maxproj) {
          if (err) {
            reject (err)
          }
          console.log("max project id:" + maxproj[0].projectId)
          resolve(maxproj[0].projectId)
       })   
     })     
    }
//insert user details
function insertProject (project) {
    return new Promise((resolve, reject)=> { 
       console.log(project)    

       getMaxProjId().then((maxProjId)=> {
       if (!maxProjId) {
         maxProjId = 0
       }
       project.projectId = parseInt(maxProjId) + 1
       db = getDb()
        db.collection("projects").insertOne(project, function(err, res) {
        if (err) { 
        reject (err)
       }
       console.log("Project inserted: " +  JSON.stringify(project));
       resolve({projectId:  project.projectId }) 
       })    
      })  
  })
}

function getProjects (id) {
  return new Promise((resolve, reject)=> {
  db = getDb()
  if (id) {
    queryString = {projId: id}
  } else {
     queryString = {}
  }
  db.collection("projects").find(queryString).toArray(function(err, projects) {
    if (err) { 
      reject (err)
    }
  console.log("Found the following projects");
  console.log(projects)

  resolve(projects);
  });
 })
}

module.exports = {
    getDb,
    initDb,
    insertUser,
    getUsers,
    updateUser,
    deleteUser,
    insertProject,
    getProjects,
};