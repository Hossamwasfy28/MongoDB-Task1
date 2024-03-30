const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "proj-1"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return console.log("error has occured")
    }

    console.log('All perf')

    const db = res1.db(dbname)

    ////////////Insertone////////////////

   
    db.collection('users').insertOne({
        name : 'Hanan',
        age : 52,
    },(error, data)=> {
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
        
    })

    
    db.collection('users').insertOne({
        name : 'Hesham',
        age : 56,
    },(error, data)=> {
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
        
    })
    ///////////////insertMany///////////////
    db.collection('users').insertMany(
       [ {
            name : "Ahmed",
            age : 27
        },
        {
            name : "Hager",
            age : 24
        },
        {
            name : "Merna",
            age : 27
        },
        {
            name : "Waleed",
            age : 45
        },
        {
            name : "Mohamed",
            age : 22
            
        },
        {
            name : "Ismael",
            age : 22
            
        },
        {
            name : "Islam",
            age : 27
            
        },
        {
            name : "Ayman",
            age : 22
            
        },
        {
            name : "Ebtihal",
            age : 27
            
        },
        {
            name : "Samira",
            age : 27
            
        },
    ], (error,data)=>{
            if(error){
                console.log("unable to insert data")
            }
            console.log(data.insertedCount)
        }
    )
//////////////////////////////////////find///////////////////////////////////////////

db.collection('users').find({age:27}).toArray((error , users)=>{
    if(error){
       return console.log("there is a problem")
    }
    console.log(users)
})

//////////////////////////////////limit/////////////////////////////////////////////////
db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
    if(error){
       return console.log("there is a problem")
    }
    console.log(users)
})

//////////////////////////////////////updateOne//////////////////////////////////////////////

db.collection("users").updateOne({_id:mongodb.ObjectId("6608323a4288ac398e12c81e")} ,{
    $set : {name : "maymon"},
    $inc : {age : 12}
}).
then((data1) => {console.log(data1.modifiedCount)})
.catch((error) => {console.log(error)})

db.collection("users").updateOne({_id:mongodb.ObjectId("6608323a4288ac398e12c81f")} ,{
    $set : {name : "Awatef"},
    $inc : {age : 15}
}).
then((data1) => {console.log(data1.modifiedCount)})
.catch((error) => {console.log(error)})

db.collection("users").updateOne({_id:mongodb.ObjectId("6608323a4288ac398e12c820")} ,{
    $set : {name : "Nour"},
    $inc : {age : 23}
}).
then((data1) => {console.log(data1.modifiedCount)})
.catch((error) => {console.log(error)})

db.collection("users").updateOne({_id:mongodb.ObjectId("6608323a4288ac398e12c821")} ,{
    $set : {name : "Abo Malek"},
    $inc : {age : 30}
}).
then((data1) => {console.log(data1.modifiedCount)})
.catch((error) => {console.log(error)})

/////////////////////////////updateMany////////////////////////////////////

db.collection("users").updateMany({},{
    $inc : {age : 10}
})
.then((data1) => {console.log(data1.modifiedCount)})
.catch((error) => {console.log(error)})

/////////////////////////////deleteMany/////////////////////////////////////

db.collection("users").deleteMany({age : 47}) 
.then((data1) => {console.log(data1.deletedCount)})
.catch((error) => {console.log(error)})

})