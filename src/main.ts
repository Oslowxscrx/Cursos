import{Students} from "./entities/students"

let students: Students[] = [];

function addStudent(){
 let currentStudent: Students = {
    name: readHtml("nameStudent"),
    id: parseInt( readHtml("idStudent")),
    address: readHtml("addressStudent"),
    registrationCode: parseInt ( readHtml("registrationCodeStudent")),
    carrer: readHtml("carrerStudent"),
    level: readHtml("levelStudent"),
 }
 students.push(currentStudent);
 console.log(students);
 console.table(students);
}
function readHtml(id: string): string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}