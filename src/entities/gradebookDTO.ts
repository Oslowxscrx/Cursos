import{Students} from "./students"
import {Course} from "./course";
import { Activity } from "./activity";
import { GradesBook } from "./gradesBook";
import { Assignment } from "./assigment";

export interface GradesBookDTO extends Students, Course, Activity, GradesBook, Assignment{

}