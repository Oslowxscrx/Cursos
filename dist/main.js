"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        id: parseInt(readHtml("idStudent")),
        address: readHtml("addressStudent"),
        registrationCode: parseInt(readHtml("registrationCodeStudent")),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent"),
    };
    students.push(currentStudent);
    console.log(students);
    console.table(students);
}
function readHtml(id) {
    return document.getElementById(id).value;
}
