//Link NodeJS To Mongo
// import mongoose

const mongoose = require('mongoose') ;

// connect to DB

mongoose.connect("mongodb://127.0.0.1:27017/Library").then( () => {
    console.log("You Connected Succesfully")
}).catch( () => {
    console.log("Your Connection is Failed")
}) ;

/*
Schema فيه خطوتين الاولى ان تعمل CRUD قبل ما نعمل مرحله الـ 
Schema !مفهاش اصلا mongoDB طب ازاي والـ 
Data عشان يضمن ان الـ Schema بتخليك تعمل mongoose بص الـ 
محطوطه بشكل سليم D-BASEاللي هحطها في الـ 
D-BASE من اللي عندي في الـ Collection بعملها ربط بـ Schema وبعد الـ 
Creation of MODEL وموضوع الربط دا عن طريق الـ 
CRUD هتعرف تنفذ الـ Modelوعن طريق الـ 
*/

// create schema

const studentSchema = new mongoose.Schema({
    fn:String, 
    ln:String,
    dept:String,
    id:Number
});

// creat Model
//mongoose.model("Collection name", schema equivelent to collection)
const studentModel = mongoose.model("Students", studentSchema)

// CRUD Operations
/*
studentModel.find( {fn:"Saif"} ).then( (data) => {
    console.log(data)
})

studentModel.findById("6a0433d83a3f585b40ba351d").then( (getId) => {
    console.log(getId)
})

studentModel.find().where("fn").equals("Saif").then( (getDatabyWhere) => {
    console.log(getDatabyWhere)
})
*/ 
//Best practice :

async function getAllStudent(){
    let result = await studentModel.find( {} ).limit(3).sort({id: 1})
    console.log(result)
}

getAllStudent()