import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollCreateQuestionsComponent } from './poll/poll-create-questions/poll-create-questions.component';
import { PollDiplayComponent } from './poll/poll-diplay/poll-diplay.component';
import { PollService } from './shared/poll.service';


@NgModule({
  declarations: [
    AppComponent,
    PollCreateQuestionsComponent,
    PollDiplayComponent,


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
