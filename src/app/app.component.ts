import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  donations: Observable<any[]>;
  total;
  average;

  data$;
  constructor(private afs: AngularFirestore) {
    this.data$ = afs.doc('aggregation/donations').valueChanges();

    // this.donations = afs
    //   .collection('donations')
    //   .valueChanges()
    //   .pipe(
    //     tap(arr => console.log(`read ${arr.length} docs`)),
    //     shareReplay(1)
    //   );

    // this.total = this.donations.pipe(
    //   map(arr => arr.reduce((total, current) => total + current.amount, 0))
    // );

    // this.average = this.donations.pipe(
    //   map(
    //     arr =>
    //       arr.reduce((total, current) => total + current.amount, 0) / arr.length
    //   )
    // );
  }

  seed() {
    this.afs.collection('donations').add({
      username: faker.name.findName(),
      amount: parseFloat(faker.finance.amount(5, 500))
    });
  }
}
