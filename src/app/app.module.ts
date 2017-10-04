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
    IonicModule.forRoot(HackTalk)
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
    Camera,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
