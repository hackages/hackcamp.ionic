import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HackTalk } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ChatsPage } from './../pages/chats/chats';
import { CallsPage } from '../pages/calls/calls';
import {  SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Contacts } from '@ionic-native/contacts';
import { ChatsProvider } from './../providers/chatsProviders';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAQ7BscqDzN9iEHbzx6x5gAAs8z2KERews",
  authDomain: "hacktalk-1658d.firebaseapp.com",
  databaseURL: "https://hacktalk-1658d.firebaseio.com",
  projectId: "hacktalk-1658d",
  storageBucket: "hacktalk-1658d.appspot.com",
  messagingSenderId: "939788198861"
};



@NgModule({
  declarations: [
    HackTalk,
    AboutPage,
    ChatsPage,
    CallsPage,
    TabsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HackTalk),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HackTalk,
    AboutPage,
    ChatsPage,
    CallsPage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
  ]
})
export class AppModule {}
