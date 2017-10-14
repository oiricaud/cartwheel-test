import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import {Databaseservice} from '../shared/databaseservice.service';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs/Rx';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
  providers: [AngularFireDatabase]
})
export class MyFormComponent implements OnInit {
  taskValue = '';
  ticks = 0;

  tasks: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.tasks = db.list('/Tasks/Tasks');
  }
  sub: Subscription;
  ngOnInit() {}

  onSubmit() {
    const date = new Date();
    console.log('endTime: ' + date);
    this.stopTimer();
    this.tasks.push(
                    {  name: this.taskValue,
                       startTime: '0',
                       endTime: this.ticks,
                       duration: this.ticks});
    this.taskValue = '';
  }
  startTimer() {
    if (this.ticks > 0 ) {
      this.ticks = 0;
    }
    const timer = Observable.timer(2000, 1000);
    this.sub = timer.subscribe(t => this.tickerFunc(t));
  }
  tickerFunc(tick) {
    console.log(this);
    this.ticks = tick;
  }
  stopTimer() {
    this.sub.unsubscribe();
  }
}
