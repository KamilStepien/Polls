import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  isToggleStateOne:boolean = true;

  constructor(private router:Router){}
  
  ngOnInit(): void {
   this.navigate(); 
  }

  setOpposetToggleState()
  {
    this.isToggleStateOne = !this.isToggleStateOne;
    this.navigate();
  }

  private navigate()
  {
    (this.isToggleStateOne === false)
    ?this.router.navigate(["/add-question"])
    :this.router.navigate(["/poll-display"]);
  
  }

}
