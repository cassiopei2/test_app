import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppModule } from "../../app.module";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
            declarations: [
              MainComponent,
            ],
            imports: [
              CommonModule,
              RouterModule.forChild([
                                     {
                                       path: '',
                                       component: MainComponent,
                                     },
                                   ]),
              SharedModule,
            ],
          })
export class MainModule {
}
