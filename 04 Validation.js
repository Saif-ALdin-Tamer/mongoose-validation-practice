/*

uniqe اللي هتعملها تكون Feilds انت عايز الـ
id number , gemail , phoneNumber يعني الـ 
كل دا يكون منفرد لكل شخص 
Validation بنعمل كده عن طريق الـ

*/

const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Library").then( () => {
    console.log("Mongoose Is connected succesfully")
}).catch( () =>{
    console.log("Mongoose Failed")
}) ;

const employesSchema = new mongoose.Schema( {
    FirstName:String,
    SecondName: String,

    Title: {
        type: String ,
        required: true ,
        minLength: 5,
        maxLength: 20,
        trim: true,
    },

    Id: {
        type: Number ,
        required: true ,
        min: 1 ,
        max: 1000 ,
        unique: true
    }
});

const employesModel = mongoose.model("Employe", employesSchema)


// validation test
async function employeeValidationTest() {
    try {
        let newEmployee = new  employesModel({
            FirstName:"Saif",
            Title: "SoftWare Engneering",
            Id: 4,
        }) ;

        let resultOfNewEmployee = await newEmployee.save(); //save(): DBبتخلي يروح للـ 
        console.log("New employee add successfully", resultOfNewEmployee) ;
    }
    catch(error) {
        console.log("Validation error", error.message)
    }

}

employeeValidationTest()

async function getAllEmployee() {
    try{
        let resultOfgetAllEmployee = await employesModel.find()
        .sort( { Id: 1 } )
        console.log(resultOfgetAllEmployee)

    }
    catch(error) {
        console.log("Validation error", error.message);
        
    }
    
}

getAllEmployee()



