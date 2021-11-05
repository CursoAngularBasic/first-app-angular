import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.scss']
})
export class HolaMundoComponent implements OnInit {

  text:string = '';
  @ViewChild('txt') txt!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  go(){
    var texto = this.txt.nativeElement.value;
    this.text = texto;
  }
}
