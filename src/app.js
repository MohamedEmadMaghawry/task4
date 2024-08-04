
const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = 'proj-1' 

mongoClient.connect (connectionUrl , (error , res1)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log('all perf')
    const db = res1.db(dbname)


    //////////////////////////////////////////
    db.collection('users').insertOne({
        name : 'boba',
        age : 23
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertOne({
        name : 'Mohamed',
        age : 30
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
    })
//////////////////////////////////////////
    db.collection ('users').insertMany([
        {
            name : 'Mazen',
            age : 27
        },
        {
            name : 'salma',
            age : 25
        },
        {
            name : 'tasneem',
            age : 27
        },
        {
            name : 'toqa',
            age : 24
        },
        {
            name : 'ali',
            age : 27
        },
        {
            name : 'mohab',
            age : 21
        },
        {
            name : 'sally',
            age : 27
        },
        {
            name : 'rabab',
            age : 27
        },
        {
            name : 'hima',
            age : 24
        },
        {
            name : 'nona',
            age : 24
        }
    ] , (error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
    })
    ///////////////////////////////////////////////////
   
    db.collection('users').find({age:27}).toArray((error,users)=>{
        if(error){
            return console.log('Error has occurred')
        }
        console.log(users)
    })

///////////////////////////////////////////////////////////
    db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
                if(error){
                    return console.log('Error has occurred')
                }
                console.log(users)
            })


            ////////////////////////////////////////

     db.collection("users").updateOne({_id:mongodb.ObjectId("66afccbf3806262b8533ddf6")},{
        $set:{name: "hamada" },
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})
     db.collection("users").updateOne({_id:mongodb.ObjectId("66afccbf3806262b8533ddf7")},{
        $set:{name: "yousef" },
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})
     db.collection("users").updateOne({_id:mongodb.ObjectId("66afccbf3806262b8533ddf8")},{
        $set:{name: "ghaly" },
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})
     db.collection("users").updateOne({_id:mongodb.ObjectId("66afccbf3806262b8533ddf9")},{
        $set:{name: "hefny" },
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

  
///////////////////////////////////

    db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

    ////////////////////////////////////////////////////////////////////


    db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})

})