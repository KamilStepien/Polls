import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import {  QuestionModule } from 'src/app/shared/question.module';

@Component({
  selector: 'app-poll-element-display',
  templateUrl: './poll-element-display.component.html',
  styleUrls: ['./poll-element-display.component.scss']
})
export class PollElementDisplayComponent implements OnInit {

  @Input() pollElementImport: QuestionModule;
  @Input() index: number;
  public faCheckCircle = faCheckCircle;
  public faCircle = faCircle;


  constructor() { }

  ngOnInit(): void {
  }

}
