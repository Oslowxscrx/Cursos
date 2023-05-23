console.log("OSCAR NOGALES")
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
   interfaces = "Interfaces",
   programacion = "Programacion",
   metodologias = "Metodologias"
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
 console.table(students);
}
function addTeacher(){
    let currentTeacher: Teachers = {
       name: readHtml("nameTeacher"),
       id: parseInt( readHtml("idTeacher")),
       carrer: readHtml("carrerTeacher"),
    }
    teachers.push(currentTeacher);
    console.table(teachers);
   }
   function addCourse(){
    let currentCourse: Course = {
      courseName: readHtml("asignatureTeacher") as "Interfaces" | "Programacion" | "Metodologias",
    }
    courses.push(currentCourse);
    console.table(courses);

    initSelect()
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

   initSelect()
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

function initSelect():void{
 

   let gradebookActivity =  document.getElementById("activityGrade") as HTMLSelectElement;

    document.querySelectorAll("#activityGrade option").forEach(option => option.remove());

    
    activities.forEach(
        (activity) => {
            let option = document.createElement("option");
            option.value = activity.name;
            option.text = activity.name;
            gradebookActivity.add(option);
        }
    );
    let gradebookCourse =  document.getElementById("courseGrade") as HTMLSelectElement;

    document.querySelectorAll("#courseGrade option").forEach(option => option.remove());

    
    courses.forEach(
        (course) => {
            let option = document.createElement("option");
            option.value = course.courseName;
            option.text = course.courseName;
            gradebookCourse.add(option);
        }
    );
}