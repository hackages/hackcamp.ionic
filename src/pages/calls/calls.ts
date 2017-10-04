import { ICall, IContact } from './../../types/index';
import { Component, OnInit } from '@angular/core';
import { NavController, Segment } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';
import { Platform } from 'ionic-angular';
import {  mockContacts } from '../../mocks/contacts';
import { Subject } from 'rxjs';

@Component({
  selector: "page-calls",
  templateUrl: "calls.html",
})
export class CallsPage implements OnInit{
  allContacts: IContact[];
  calls: ICall[];
  searchTerm: Subject<string> = new Subject<string>();
  selectedSegment: string = "All";
  constructor(public platform: Platform, public navCtrl: NavController, public contacts: Contacts) {}

  ngOnInit(){
    this.getAllCalls();

    this.searchTerm.subscribe((searchTerm: string) =>{
      if(searchTerm === "") {
        this.calls = this.allContacts.map((contact, index) => ({
          contact,
          missed: index % 3 === 0 
        }));
      } else {
        this.calls = this.calls.filter(call => {
          searchTerm = searchTerm.toLocaleLowerCase();

          return call.contact.username.toLocaleLowerCase().includes(searchTerm) ||
            call.contact.phoneNumber.includes(searchTerm);
        });
      }
    })
  }

  getAllCalls(){
    if(this.platform.is("mobileweb")){
      this.allContacts = mockContacts;
      this.changeSegment(this.selectedSegment);
    } else{
      this.platform.ready().then(() =>{
        this.contacts
          .find(["name", "phoneNumbers"], {
            multiple: true,
          })
          .then((contacts: Contact[]) => {
            this.allContacts = contacts.map((contact: Contact) => ({
              username: contact.name.formatted,
              phoneNumber: contact.phoneNumbers? contact.phoneNumbers[0].value: ""
            }));

          this.changeSegment(this.selectedSegment);
        });
      })
    }
  }

  segmentChanged(segment: Segment){
    this.selectedSegment = segment.value;
    this.changeSegment(segment.value)
  }

  changeSegment(selectedSegment: string){
      if(selectedSegment === "All") {
        this.calls = this.allContacts.map((contact, index) => ({
          contact,
          missed: index % 3 === 0 
        }));
      } else {
        this.calls = this.calls.filter(call => call.missed);
      }
  }

  filterCalls(searchTerm: string){
    this.searchTerm.next(searchTerm);
  }
}
