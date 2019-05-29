import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})

export class MainBoardComponent implements OnInit {

  constructor(private sb: MatSnackBar) {};

  openSnackBar(message: string, action: string) {
    this.sb.open(message, action, {
      duration: 2000,
    });
  }

  private colors = ['green', 'blue', 'yellow', 'orange', 'red', 'black', 'white'];

  public squareConfig = [
  {color: 'green'},
  {color: 'green'},
  {color: 'green'},
  {color: 'green'},
  {color: 'green'},
  {color: 'green'},
  {color: 'green'},
  {color: 'green'},
  {color: 'green'}];

  changeColor($event): void {
    this.squareConfig[$event].color = this.colors[$event];
    this.checkColors(this.squareConfig[$event].color);
    console.log($event);
  }

  checkColors(color) {
    let sameColorCounter = 0;
    for(let i = 0; i < this.squareConfig.length; i++) {
      if(color == this.squareConfig[i].color) {
        sameColorCounter++;
      }
      
      if(sameColorCounter == 9) {
      this.openSnackBar('Цвет всего квадрата', this.squareConfig[i].color);        
      }
    }
    console.log('Checking...');
  }

  ngOnInit() {
  }

}
