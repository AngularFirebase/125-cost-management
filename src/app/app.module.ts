import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const config = {
  apiKey: 'AIzaSyBogpc-AUVgVdcgoiWhE4_lKCFzfcbaSaA',
  authDomain: 'angularfirebase-267db.firebaseapp.com',
  databaseURL: 'https://angularfirebase-267db.firebaseio.com',
  projectId: 'angularfirebase-267db',
  storageBucket: 'angularfirebase-267db.appspot.com',
  messagingSenderId: '96751198234'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
