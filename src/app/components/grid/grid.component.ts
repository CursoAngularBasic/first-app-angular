import { Component, Input, OnInit } from '@angular/core';
import { OperacionesModels } from 'src/app/models/operaciones-models.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() operaciones:Array<OperacionesModels> = new Array<OperacionesModels>();
  constructor() { }

  ngOnInit(): void {
  }

}
