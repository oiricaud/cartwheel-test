import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyAppBarComponent } from './my-app-bar/my-app-bar.component';
import { MyTableComponent } from './my-table/my-table.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyAppBarComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
