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

  TaskListArray: Array<String> = ["Clean the house", "Pull trash to road", "Pick-up lunch", "Binge TV shows"]

}
