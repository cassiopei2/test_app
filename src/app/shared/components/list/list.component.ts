import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { HttpService } from "../../services/http/http.service";
import {
  map,
  mergeMap,
  Observable,
  of,
} from "rxjs";
import { Planet } from "../../models/planet";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
             selector: 'app-list',
             templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  // Variables
  counter = 1;

  // Observables
  planets$!: Observable<Planet[]>;

  constructor(public httpService: HttpService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.get(this.counter);
  }

  /**
   * Inits data fetch and other function
   */
  get(counter: number) {
    this.planets$ = this.httpService.get(counter).pipe(map(x => {
      return x.results;
    }));
  }

  /**
   * Gets next page
   */
  next() {
    if (this.counter >= 6) {
      this.matSnackBar.open('This is the last page')
      return;
    }
    this.counter++
    this.get(this.counter);
  }

  /**
   * Gets prev page
   */
  prev() {
    if (this.counter <= 1) {
      this.matSnackBar.open('This is first page')
      return;
    }
    this.counter--
    this.get(this.counter);
  }
}
