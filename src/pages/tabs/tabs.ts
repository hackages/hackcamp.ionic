import { Component } from '@angular/core';
import { AboutPage as CameraPage } from '../about/about';
import { ChatsPage } from '../chats/chats';
import { CallsPage} from '../calls/calls';
import { SettingsPage  } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  calls = CallsPage;
  camera = CameraPage;
  chats = ChatsPage;
  settings = SettingsPage;

}
