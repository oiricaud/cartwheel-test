import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import {Databaseservice} from '../shared/databaseservice.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  tasks: FirebaseListObservable<any[]>;
  user = null;
  displayedColumns = ['taskName', 'startTime', 'endTime', 'duration'];
  dataSource = this.tasks;
  constructor(private auth: Databaseservice, public db: AngularFireDatabase) { }
  ngOnInit() {
    this.auth.getAuthState().subscribe((user) => this.user = user);
    this.tasks = this.db.list('/Tasks/Tasks/');
    this.tasks.subscribe(tasks => tasks.forEach(task => console.log(task)));
  } loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  isLoggedIn() {
    return this.auth.isLoggedIn();
  }
}
export interface Element {
  taskName: string;
  startTime: string;
  endTime: string;
  duration: string;
}

const data: Element[] = [
  {taskName: 'Get groceries', startTime: '8:04:02', endTime: '8:04:23', duration: '.021'},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }
  disconnect() {}
}
