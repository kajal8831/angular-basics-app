import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent {
  selectedRadioButtonValue:string = "All";

  @Output()
  countRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();

@Input()
all:number = 0;

@Input()
male:number =0;

@Input()
female:number=0;

onRadioButtonSelectionChange(){
  this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  //console.log(this.selectedRadioButtonValue);
}
}

