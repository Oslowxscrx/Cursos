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
    Courses["interfaces"] = "Interfaces";
    Courses["programacion"] = "Programacion";
    Courses["metodologias"] = "Metodologias";
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
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        id: parseInt(readHtml("idTeacher")),
        carrer: readHtml("carrerTeacher"),
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addCourse() {
    let currentCourse = {
        courseName: readHtml("asignatureTeacher"),
    };
    courses.push(currentCourse);
    console.table(courses);
    initSelect();
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
    initSelect();
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
function initSelect() {
    let gradebookActivity = document.getElementById("activityGrade");
    document.querySelectorAll("#activityGrade option").forEach(option => option.remove());
    activities.forEach((activity) => {
        let option = document.createElement("option");
        option.value = activity.name;
        option.text = activity.name;
        gradebookActivity.add(option);
    });
    let gradebookCourse = document.getElementById("courseGrade");
    document.querySelectorAll("#courseGrade option").forEach(option => option.remove());
    courses.forEach((course) => {
        let option = document.createElement("option");
        option.value = course.courseName;
        option.text = course.courseName;
        gradebookCourse.add(option);
    });
}
