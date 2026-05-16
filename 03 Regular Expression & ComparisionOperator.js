/*
/  /  => RegEx بنحط جواه الـ 
^ => ^S هات بدايه النص مثلا 
S هات كل اللي يبدا بـ 
$  => نهابة النص

i => a ولا A مبيفرقش معاه 
g => بيدور في النص كله مش بيقف عند أول نتيجة يلاقيها


Schema في الاول في RegEx حطيت الـ
الغلط قبل ماتوصل غلط اصلا data عشان ارفض الـ 

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    // الـ RegEx ده بيضمن إن الإيميل فيه @ وبعدها دومين
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] 
    }
});

*/


/*
$gt

$gte

$eq

$lt

$lte


async function getStudents() {
    let result = await studentsModel.find( { id:{ $gte: 1} }).sort( {fn: 1, id: 1})
    console.log(result)
}

async function getStudents() {
    let result = await studentsModel.find( { id:{ $gte: 1, $lte:5 } }).sort( {fn: 1, id: 1})
    console.log(result)
}


*/

