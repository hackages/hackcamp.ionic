Develop our own version of HackHub

--- CallsPage
- List all contacts
 - Mock data is available in Mock folder, display them on the page
 - Display all the contacts from your phone. Hint: Contacts cordova plugin
 - implement getAllCalls, it should get all the contacts and map them to create the list of calls.
    The missed property should be randomly assigned 
 - implement segmentChanged, it should toggle between "All" and "Missed"
 - implement filterCalls, it filters calls by username and phone number
 - When clicking on an item in the list of calls, you should call that number using the cordova plugin Call Number 
 - Delete button:
   -- Don't use the native delete contact here, just store this information in the Native Storage
 - Favorite button:
   -- When you click on favorite, the user should be added into your list of favorite


--- CameraPage
 - Implement the Camera page, it should just launch your camera then save the picture in your local storage. Hint: Native Storage cordova plugin


--- SettingsPage
 - It's your turn to go from scratch and learn how to put components together using the Ionic UI kit and icon. Go head and build this screen by
 grouping all components together. 

--- ChatsPage with Firebase
 - During the last day, we'll spend time building the chat apps using Firebase.

 - ChatsPage should list all your contact
// Template for chat-room.html
 <ion-header>
  <ion-navbar>
    <ion-title>
      Chat
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
 <ion-list no-lines>
  <ion-item *ngFor="let message of messages | async">
   <h3>{{message.username}}</h3>
   <p>{{message.message}}</p>
  </ion-item>
 </ion-list>
</ion-content>
<ion-footer>
 <ion-item>
  <ion-input type="text" placeholder="type here..." [(ngModel)]="newmessage"></ion-input>
  <button ion-button clear item-right (click)="send(newmessage)">Send</button>
 </ion-item>
</ion-footer>

-- Bonus: Add
