import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
 
@Injectable()
export class ChatsProvider {
 
  constructor(public firebase: AngularFireDatabase) { }
 
  sendMessage(message: string) {
      console.log('inside');
      
      this.firebase.list('/messages/davy-tonio').push({
          username: 'tonio',
          message,
      });
  }

  getMessages(): AngularFireList<string> {
    return this.firebase.list('/messages');
  }

  getMessage(id): string {
    throw new Error('not implemented');
  }
}