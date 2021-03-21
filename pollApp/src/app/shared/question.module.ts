import { AnswerModel } from "./answer.module";

export class QuestionModule
{
    constructor( public name:string, public answers: AnswerModel[]){};
}