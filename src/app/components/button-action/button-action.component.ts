import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {

  @Output() action = new EventEmitter();
  @Input() textoBoton:string='';
  @Input() class:string='btn btn-primary';
  constructor() { }

  ngOnInit(): void {
  }

  go(){
    this.action.emit();
  }

}
