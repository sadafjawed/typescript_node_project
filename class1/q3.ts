var student= "ali";
var newstudent=student.toLowerCase ();
var updatestudent=student.toUpperCase();
function capatilize(student){
    newstudent=student.toLowerCase()
    return student.charAt(0).toUpperCase()+newstudent.slice(1)
}
console.log( capatilize(student));
console.log(newstudent);
console.log(updatestudent);


