import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-exercises',
  templateUrl: './ang-exercises.component.html',
  styleUrls: ['./ang-exercises.component.css']
})
export class AngExercisesComponent implements OnInit {

  cantidad = 5;
  numbers = [1,2,3,4,5,6,7,8,9,10,11,,12,13,14,15,16,17,18,19,20];
  constructor() { }

  ngOnInit(): void {
    
  }

}
