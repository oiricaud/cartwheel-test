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
import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { Databaseservice } from './shared/databaseservice.service';

import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyAppBarComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'cartwheel-1d3df'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [Databaseservice],
  bootstrap: [AppComponent]

})
export class AppModule { }
