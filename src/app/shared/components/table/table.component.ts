import {
  Component,
  Input,
} from '@angular/core';
import { Planet } from "../../models/planet";
import { MatDialog } from "@angular/material/dialog";
import { DetailsComponent } from "../details/details.component";

@Component({
             selector: 'app-table',
             templateUrl: './table.component.html',
           })
export class TableComponent {

  // Inputs
  @Input() planet!: Planet;

  // Variables
  displayedColumns = ['name', 'diameter', 'climate', 'population']

  constructor(private matDialog: MatDialog) {
  }

  /**
   * Gets datasource dynamically
   */
  get dataSource() {
    return [this.planet]
  }

  /**
   * Opens planet details
   * @param row
   */
  open(row: Planet) {
    this.matDialog.open(DetailsComponent, {
      data: {
        planet: row,
      },
    });
  }
}
