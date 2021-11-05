import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OperacionesModels } from 'src/app/models/operaciones-models.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  resultado?: number = undefined;
  operaciones: Array<OperacionesModels> = new Array<OperacionesModels>();
  @ViewChild('number1') numero1!: ElementRef;
  @ViewChild('number2') numero2!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  suma() {
    var num1 = this.numero1.nativeElement.value;
    var num2 = this.numero2.nativeElement.value;

    if (num1 === '' || num2 === '') {
      Swal.fire(
        {
          title: 'Error',
          text: 'Debe ingresar un número valido',
          icon: 'error'
        }
      )
      return;
    }

    this.resultado = Number.parseInt(num1) + Number.parseInt(num2);
    var operacion = new OperacionesModels();
    operacion.tipoOperacion = 'Suma';
    operacion.operacion = num1 + ' + ' + num2;
    operacion.resultado = this.resultado;
    this.operaciones.push(operacion);
  }

  multiplicacion() {
    var num1 = this.numero1.nativeElement.value;
    var num2 = this.numero2.nativeElement.value;

    if (num1 === '' || num2 === '') {
      Swal.fire(
        {
          title: 'Error',
          text: 'Debe ingresar un número valido',
          icon: 'error'
        }
      )
      return;
    }
    this.resultado = Number.parseInt(num1) * Number.parseInt(num2);
    var operacion = new OperacionesModels();
    operacion.tipoOperacion = 'Multiplicación';
    operacion.operacion = num1 + ' * ' + num2;
    operacion.resultado = this.resultado;
    this.operaciones.push(operacion);
  }

  restar() {
    var num1 = this.numero1.nativeElement.value;
    var num2 = this.numero2.nativeElement.value;

    if (num1 === '' || num2 === '') {
      Swal.fire(
        {
          title: 'Error',
          text: 'Debe ingresar un número valido',
          icon: 'error'
        }
      )
      return;
    }
    this.resultado = Number.parseInt(num1) - Number.parseInt(num2);
    var operacion = new OperacionesModels();
    operacion.tipoOperacion = 'Resta';
    operacion.operacion = num1 + ' - ' + num2;
    operacion.resultado = this.resultado;
    this.operaciones.push(operacion);
  }

}
