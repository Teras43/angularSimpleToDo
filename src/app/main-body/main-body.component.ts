import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checked: Boolean = false;
  
  taskListArray: Array<any> = [
      {task: "Clean the house", isComplete: false }, 
      {task: "Pull trash to road", isComplete: false }, 
      {task: "Pick-up lunch", isComplete: false }, 
      {task: "Binge TV shows", isComplete: false }
    ]
}
