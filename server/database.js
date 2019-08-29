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

//get maximum project id
function getMaxProjId() { 
     return new Promise((resolve, reject)=> { 
     db = getDb() 
       db.collection("projects").find({}).sort({ "projectId": -1 }).limit(1).toArray(function(err, maxproj) {
          if (err) {
            reject (err)
          }
          
          if (0 < maxproj.length) {
             resolve(maxproj[0].projectId)
          } else {
             resolve (0)
          }
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
    queryString = {projectId: parseInt(id)}
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

//update project
function updateProject (proj) {
    return new Promise((resolve, reject)=> {
    db = getDb()

    console.log("update request received:"+ JSON.stringify(proj))
    let _id = proj._id;
    delete proj._id;     
    db.collection("projects").updateOne({"_id": ObjectID(_id)}, {$set: proj}).then(result => {
      const { matchedCount, modifiedCount } = result;
      if(matchedCount && modifiedCount) {
          console.log("project updated: " + proj.projectId);
          resolve({projectId: proj.projectId })
       } 
     }).catch(err => {
         reject (err)
     })
  })
}

//delete project
function deleteProject(id) {
    return new Promise((resolve, reject)=> {
    db = getDb()
    const query = {projectId: parseInt(id)}
    db.collection("projects").deleteOne(query, function(err, res) {
    if (err) { 
      reject (err)
    }
    console.log("Project with id:"+ id + "deleted");
    resolve({projectId: id }) 
    })
  })
}


//get maximum Parent task id
function getmaxParentTaskId() { 
     return new Promise((resolve, reject)=> { 
     db = getDb() 
       db.collection("parentTasks").find({}).sort({ "parentId": -1 }).limit(1).toArray(function(err, maxParent) {
          if (err) {
            reject (err)
          }
          
          if (0 < maxParent.length) {
             resolve(maxParent[0].parentId)
          } else {
             resolve (0)
          }
       })   
     })     
    }
//insert Parent task
function insertParentTask (parentTask) {
    return new Promise((resolve, reject)=> { 
       console.log(parentTask)    

       getmaxParentTaskId().then((maxParentTaskId)=> {
       if (!maxParentTaskId) {
         maxParentTaskId = 0
       }
       parentTask.parentId = parseInt(maxParentTaskId) + 1
        db = getDb()
        db.collection("parentTasks").insertOne(parentTask, function(err, res) {
        if (err) { 
          reject (err)
        }
       console.log("Parent task inserted: " +  JSON.stringify(parentTask));
       resolve({parentId:  parentTask.parentId }) 
       })    
      })  
  })
}

//get parent task for id
function getParentTasks (id) {
  return new Promise((resolve, reject)=> {
  db = getDb()
  if (id) {
    queryString = {parentId: parseInt(id)}
  } else {
     queryString = {}
  }
  db.collection("parentTasks").find(queryString).toArray(function(err, parentTasks) {
    if (err) { 
      reject (err)
    }
  console.log("Found the following parent tasks");
  console.log(parentTasks)

  resolve(parentTasks);
  });
 })
}


//get maximum task id
function getmaxTaskId() { 
     return new Promise((resolve, reject)=> { 
     db = getDb() 
       db.collection("tasks").find({}).sort({ "Id": -1 }).limit(1).toArray(function(err, max) {
          if (err) {
            reject (err)
          }
          
          if (0 < max.length) {
             resolve(max[0].Id)
          } else {
             resolve (0)
          }
       })   
     })     
    }
	
//insert task
function insertTask (task) {
    return new Promise((resolve, reject)=> { 
       console.log(task)    

       getmaxTaskId().then((maxTaskId)=> {
       if (!maxTaskId) {
         maxTaskId = 0
       }
       task.taskId = parseInt(maxTaskId) + 1
        db = getDb()
        db.collection("tasks").insertOne(task, function(err, res) {
        if (err) { 
          reject (err)
        }
       console.log(" task inserted: " +  JSON.stringify(task));
       resolve({taskId: task.taskId }) 
       })    
      })  
  })
}

//get all tasks
function getTasks (id) {
  return new Promise((resolve, reject)=> {
  db = getDb()
  if (id) {
    queryString = {taskId: parseInt(id)}
  } else {
     queryString = {}
  }
  db.collection("tasks").find(queryString).toArray(function(err, tasks) {
    if (err) { 
      reject (err)
    }
  console.log("Found the following  tasks");
  console.log(tasks)
  resolve(tasks);
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
    updateProject,
    deleteProject,
    insertParentTask,
    getParentTasks,
    getTasks,
    insertTask

};