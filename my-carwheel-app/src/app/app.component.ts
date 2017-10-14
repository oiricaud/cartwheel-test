import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import {Databaseservice} from './shared/databaseservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks: FirebaseListObservable<any[]>;
  user = null;
  constructor(private auth: Databaseservice, public db: AngularFireDatabase) {}
  ngOnInit() {
    this.auth.getAuthState().subscribe((user) => this.user = user);
    this.tasks = this.db.list('/Tasks');
  }
}
