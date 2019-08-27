// Retrieve
const assert = require("assert");
var MongoClient = require('mongodb').MongoClient

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
    const selector = {_id: user._id}
    delete user._id;
    db.collection("users").updateOne(selector, {$set: user }).then(result => {
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

module.exports = {
    getDb,
    initDb,
    insertUser,
    getUsers,
    updateUser,
    deleteUser
};