import{Students} from "./entities/students"
import{Teachers} from "./entities/teacher"
import {Course} from "./entities/course";
import { Activity } from "./entities/activity";
import { GradesBook } from "./entities/gradesBook";

let students: Students[] = [];
let teachers: Teachers[] = [];
let courses: Course[] = [];
let activities: Activity[] = [];
let gradesbooks: GradesBook[] =[];
enum Carrera {
    turismo = "Turismo",
    marketing = "Marketing",
    software = "Software",
}
enum  Courses{
   typescript = "Typescript",
   php = "PHP",
   angular = "Angular",
}
function addStudent(){
 let currentStudent: Students = {
    name: readHtml("nameStudent"),
    id: parseInt( readHtml("idStudent")),
    address: readHtml("addressStudent"),
    registrationCode: parseInt ( readHtml("registrationCodeStudent")),
    level: readHtml("levelStudent"),
 }
 students.push(currentStudent);
 console.log(students);
 console.table(students);
}
function addTeacher(){
    let currentTeacher: Teachers = {
       name: readHtml("nameTeacher"),
       id: parseInt( readHtml("idTeacher")),
       address: readHtml("addressTeacher"),
       title:readHtml("titleTeacher"),
       asignature: readHtml("asignatureTeacher") as "Interfaces" | "Programacion" | "Metodologias",
       carrer: readHtml("carrerTeacher"),
    }
    teachers.push(currentTeacher);
    console.log(teachers);
    console.table(teachers);
   }
   function addCourse(){
    let currentCourse: Course = {
       area: readHtml("areaCourse"),
       name:  readHtml("nameCourse"),
    }
    courses.push(currentCourse);
    console.log(courses);
    console.table(courses);
   }

   
function readHtml(id: string): string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}

function addActivity() {
   let currentActivity: Activity = {
      name: readHtml("activity")
   }
   activities.push(currentActivity);
   console.table(activities);
}

function addgradeBook(){
   let currentGradeBook: GradesBook ={
      course: readHtml("coursegrd"),
      activity: readHtml("activitygrd"),
      peso: parseInt(readHtml("weigthgrd")),
      gradeMax: parseInt(readHtml("maxnotagrd"))      
   }
   gradesbooks.push(currentGradeBook);
   console.table(gradesbooks);
}

function getOptions():void{
   let currentcourseone = document.getElementById("coursegrd") as HTMLSelectElement;
   document.querySelectorAll("#coursegrd option").forEach(option => option.remove);

   let coursevar = Object.values(courses);
   coursevar.forEach(element => {
      let option = document.createElement("option");
      option.value = element.name;
   });
}