/*



*/

const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Library").then( () => {
    console.log("Mongoose Is connected succesfully")
}).catch( () =>{
    console.log("Mongoose Failed")
}) ;

const employesSchema = new mongoose.Schema( {
    FirstName: {type: String, uppercase: true, trim: true },
    SecondName: {type: String, uppercase: true, trim: true },

    Title: {
        type: String, 
        uppercase: true, 
        trim: true,
        required: true,

        minLength: 5,
        maxLength: 20
    },

    Id: {
        type: Number ,
        select: false ,
        required: true ,
        min: 1 ,
        max: 1000 ,
        unique: true
    },

    Status: {
        type: String ,
        maxLength: 15 ,
        minLength: 5 ,
        uppercase: true ,
        trim: true ,
        enum: {
            values: ['ACTIVE', 'PENDING', 'RESIGNED'],
            message: "{VALUE} is not valid status! choose ACTIVE, PENDING, or RESIGNED "
        }
    },

    Phone: {
        type: String ,
        required: [true, "Phone Number is required" ] ,
        match: [/^01\d{9}$/, "Phone number must start with 01 and be exactly 11 digits"]
    },
});

const employesModel = mongoose.model("Employe", employesSchema)


// validation test
async function employeeValidationTest() {
    try {
        let newEmployee = new  employesModel({
            FirstName:"Saif",
            Title: "SoftWare Engneering",
            Status: "EXPIRED" ,
            Phone: "0212345678" ,
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
