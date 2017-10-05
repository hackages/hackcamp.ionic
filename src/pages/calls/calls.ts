import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {Contacts, Contact} from "@ionic-native/contacts";
import {ICall, IContact} from "../../types/index";
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";
import { CallNumber } from '@ionic-native/call-number';
import {mockContacts} from "../../mocks/contacts";


@Component({
  selector: "page-calls",
  templateUrl: "calls.html",
})
export class CallsPage implements OnInit{
  allContacts: IContact[];
  calls: ICall[];
  selectedSegment: string = "All";
  allContacts$: Observable<IContact[]>;
  searchTerm$:Subject<string> = new Subject<string>();
  missed:Boolean = false;
  constructor(public platform: Platform, public navCtrl: NavController, public contacts: Contacts, private callNumber: CallNumber) {}

  ngOnInit(){
    this.allContacts$ = this.platform.is("mobile") ?
      Observable.fromPromise(this.contacts.find(['*']))
        .switchMap(contacts => contacts)
        .map(x => ({username: x.name.givenName, phoneNumber: x.phoneNumbers[0].value}))
        .toArray()
      : Observable.of(mockContacts);
    this.allContacts$.subscribe(x => this.getAllContacts(x));
    this.searchTerm$.subscribe(x => this.filterCalls(x))
  }

  getAllContacts(contact: IContact[]):void{
    this.allContacts = contact;
    this.getAllCalls();
  }

  getAllCalls(){
    return this.calls=this.allContacts.map((contact) => ({contact, missed:this.missed=!this.missed}))
  }

  segmentChanged(){
    this.calls = this.selectedSegment === 'Missed' ? this.calls.filter(x => x.missed) : this.getAllCalls();
  }

  filterCalls(calls){
    this.calls = calls ?
      this.allContacts.filter(call => call.username.includes(calls))
      .map((contact) => ({contact, missed:this.missed=!this.missed}))
      : this.getAllCalls();
  }

  callContact(number){
    this.callNumber.callNumber(number, true);
  }
}
