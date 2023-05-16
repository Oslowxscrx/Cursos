"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
let activities = [];
let gradesbooks = [];
var Carrera;
(function (Carrera) {
    Carrera["turismo"] = "Turismo";
    Carrera["marketing"] = "Marketing";
    Carrera["software"] = "Software";
})(Carrera || (Carrera = {}));
var Courses;
(function (Courses) {
    Courses["typescript"] = "Typescript";
    Courses["php"] = "PHP";
    Courses["angular"] = "Angular";
})(Courses || (Courses = {}));
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        id: parseInt(readHtml("idStudent")),
        address: readHtml("addressStudent"),
        registrationCode: parseInt(readHtml("registrationCodeStudent")),
        level: readHtml("levelStudent"),
    };
    students.push(currentStudent);
    console.log(students);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        id: parseInt(readHtml("idTeacher")),
        address: readHtml("addressTeacher"),
        title: readHtml("titleTeacher"),
        asignature: readHtml("asignatureTeacher"),
        carrer: readHtml("carrerTeacher"),
    };
    teachers.push(currentTeacher);
    console.log(teachers);
    console.table(teachers);
}
function addCourse() {
    let currentCourse = {
        area: readHtml("areaCourse"),
        name: readHtml("nameCourse"),
    };
    courses.push(currentCourse);
    console.log(courses);
    console.table(courses);
}
function readHtml(id) {
    return document.getElementById(id).value;
}
function addActivity() {
    let currentActivity = {
        name: readHtml("activity")
    };
    activities.push(currentActivity);
    console.table(activities);
}
function addgradeBook() {
    let currentGradeBook = {
        course: readHtml("coursegrd"),
        activity: readHtml("activitygrd"),
        peso: parseInt(readHtml("weigthgrd")),
        gradeMax: parseInt(readHtml("maxnotagrd"))
    };
    gradesbooks.push(currentGradeBook);
    console.table(gradesbooks);
}
function getOptions() {
    let currentcourseone = document.getElementById("coursegrd");
    document.querySelectorAll("#coursegrd option").forEach(option => option.remove);
    let coursevar = Object.values(courses);
    coursevar.forEach(element => {
        let option = document.createElement("option");
        option.value = element.name;
    });
}
