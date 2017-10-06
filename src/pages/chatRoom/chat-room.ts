import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-chats',
  templateUrl: 'chat-room.html'
})
export class ChatRoomPage {
  username: string;
  constructor(
    public navCtrl: NavController,
  ) {}

  ionicViewDidLoad(){}
}
