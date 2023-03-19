import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { Planet } from "../../models/planet";
import { HttpService } from "../../services/http/http.service";
import {
  first,
} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {

  // Variables
  planet: Planet;

  residents: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {planet: Planet},
              private httpService: HttpService,
              private matDialogRef: MatDialogRef<DetailsComponent>) {
    this.planet = this.data.planet;
  }

  /**
   * Checks if we load all residents
   */
  get check() {
    return this.planet.residents.length === this.residents.length;
  }

  ngOnInit(): void {
    this.initDefault();
  }

  /**
   * Close dialog
   */
  dismiss() {
    this.matDialogRef.close();
  }

  /**
   * Inits data fetch and other.
   * @private
   */
  private initDefault() {
    this.getAll();
    this.resize();
  }

  /**
   * Gets all residents
   */
  private async getAll() {
    for (const resident of this.planet.residents) {
       this.residents.push(await this.httpService.getByUrl(resident).pipe(first()).toPromise());
    }
  }

  /**
   * Resize dialog
   * @private
   */
  private resize() {
    this.matDialogRef.updateSize('40vw',)
  }
}
