import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollCreateQuestionsComponent } from './poll/poll-create-questions/poll-create-questions.component';
import { PollDiplayComponent } from './poll/poll-diplay/poll-diplay.component';


@NgModule({
  declarations: [
    AppComponent,
    PollCreateQuestionsComponent,
    PollDiplayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
