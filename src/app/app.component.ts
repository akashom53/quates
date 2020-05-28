import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bible Quotes';

  chapter = '';
  verse = '';
  quote = '';
  quotes: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.quotes = db.list('quotes').valueChanges();
  }

  onSubmit() {
    this.db.list('quotes').push({
      chapter: this.chapter,
      verse: this.verse,
      quote: this.quote,
    });
    this.chapter = '';
    this.verse = '';
    this.quote = '';
  }
}
