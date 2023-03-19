import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./components/list/list.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from "@angular/material/table";
import { DetailsComponent } from './components/details/details.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatLineModule } from "@angular/material/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
            declarations: [
              ListComponent,
              ToolbarComponent,
              TableComponent,
              DetailsComponent,
            ],
            exports: [
              ListComponent,
              ToolbarComponent,
            ],
            imports: [
              CommonModule,
              MatExpansionModule,
              MatToolbarModule,
              RouterLink,
              MatButtonModule,
              MatIconModule,
              MatProgressSpinnerModule,
              MatTableModule,
              MatDialogModule,
              MatListModule,
              MatLineModule,
              MatSnackBarModule
            ],
          })
export class SharedModule {
}
