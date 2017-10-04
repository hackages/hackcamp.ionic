import { Component, OnInit } from '@angular/core';
import { NavController, Segment } from 'ionic-angular';

@Component({
  selector: "page-calls",
  templateUrl: "calls.html",
})
export class CallsPage implements OnInit{
  allContacts: IContact[];
  calls: ICall[];
  selectedSegment: string = "All";
  constructor(public platform: Platform, public navCtrl: NavController, public contacts: Contacts) {}

  ngOnInit(){
  }

  getAllCalls(){
    throw new Error('not implemented');
  }

  segmentChanged(segment: Segment){
    throw new Error('not implemented');
  }

  changeSegment(selectedSegment: string){
    throw new Error('not implemented');
  }

  filterCalls(searchTerm: string){
    throw new Error('not implemented');
  }
}
