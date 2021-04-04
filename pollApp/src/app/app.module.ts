import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollCreateQuestionsComponent } from './poll/poll-create-questions/poll-create-questions.component';
import { PollDiplayComponent } from './poll/poll-diplay/poll-diplay.component';
import { PollService } from './shared/poll.service';
import { PollElementDisplayComponent } from './poll/poll-element-display/poll-element-display.component';


@NgModule({
  declarations: [
    AppComponent,
    PollCreateQuestionsComponent,
    PollDiplayComponent,
    PollElementDisplayComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
