import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {

  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    this.action.emit();
  }

}
