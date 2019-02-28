import { Component, OnInit } from '@angular/core';
import {DATA} from '../report.model';
import {Observable} from "rxjs";




@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  displayedColumns: string[] = ['namedate', 'group', 'items', 'icons'];

  dataSource = DATA;


}
