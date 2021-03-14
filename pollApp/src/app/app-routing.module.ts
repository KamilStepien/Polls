import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PollCreateQuestionsComponent } from './poll/poll-create-questions/poll-create-questions.component';
import { PollDiplayComponent } from './poll/poll-diplay/poll-diplay.component';

const routes: Routes = [
  {path:"add-question",component: PollCreateQuestionsComponent},
  {path:"poll-display", component: PollDiplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
