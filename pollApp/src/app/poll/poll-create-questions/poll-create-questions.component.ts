import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswerModel } from 'src/app/shared/answer.module';
import { PollService } from 'src/app/shared/poll.service';

@Component({
  selector: 'app-poll-create-questions',
  templateUrl: './poll-create-questions.component.html',
  styleUrls: ['./poll-create-questions.component.scss']
})
export class PollCreateQuestionsComponent   {

  constructor(private pollService:PollService) { }

  public answers: AnswerModel[] = [];

  questionForm = new FormGroup
  (
    {
      questionName: new FormControl("", [Validators.required])
    }
  )

  answerForm = new FormGroup(
    {
      answerText: new FormControl("", [Validators.required]),
      answerCheckbox: new FormControl("")
    }
  )
  private cleanAll()
  {
    this.answers = [];
    this.answerForm.reset();
    this.questionForm.reset();
  }


  addAnswer()
  {
    this.answers.push(new AnswerModel(this.answerForm.value.answerText,Boolean(this.answerForm.value.answerCheckbox) ));
    this.answerForm.reset();
  }

  addQuestion()
  {
    this.pollService.addQuestion(this.questionForm.value.questionName, this.answers );
    this.pollService.dispaly();
    this.cleanAll();
  }






}
