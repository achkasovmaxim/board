import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { SquareConfig, OptionColor } from '../../models/square-config.model';
import { Options } from 'selenium-webdriver/firefox';



@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() squareConfig: SquareConfig[];
  @Input() optionColor: OptionColor[];

  @Output() onClickSquare = new EventEmitter<number>();
  
  constructor() { }
  
  clickOnSquare(index: number): void {
    this.onClickSquare.emit(index);
  }
  
  ngOnInit() {
  }

}
