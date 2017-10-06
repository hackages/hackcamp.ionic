import { ChatsProvider } from './../../providers/chatsProviders';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  username: string;
  messages: any;
  constructor(
    public navCtrl: NavController,
    public firebase: AngularFireDatabase
  ) {}

  ngOnInit(){
     this.messages = this.firebase.list('/messages/davy-tonio').valueChanges();
  }

  send(message: string){
    this.firebase.list('/messages/davy-tonio').push({
          username: 'tonio',
          message,
      });
   
  }
}
