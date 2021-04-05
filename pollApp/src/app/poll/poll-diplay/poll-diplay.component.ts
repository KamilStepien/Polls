import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/shared/poll.service';

@Component({
  selector: 'app-poll-diplay',
  templateUrl: './poll-diplay.component.html',
  styleUrls: ['./poll-diplay.component.scss']
})
export class PollDiplayComponent implements OnInit {

  constructor(public pollService:PollService) { }

  ngOnInit(): void {
  }

}
