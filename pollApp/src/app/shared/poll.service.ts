import { Injectable } from '@angular/core';
import { AnswerModel } from './answer.module';
import { QuestionModule } from './question.module';

@Injectable({
  providedIn: 'root'
})



export class PollService {

  private poll: QuestionModule[] = [];
  

  addQuestion(name:string, answers:AnswerModel[])
  {
    this.poll.push(new QuestionModule(name,  answers));
  }

  dispaly()
  {
    console.log(this.poll);
  }


}
