import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Message} from "../models/Message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private store : AngularFirestore) { }

  messagesPath : string = 'messages'
  writeMessage(name: string, message: string) {
    this.store.collection(this.messagesPath).add({name : name, message : message}).then()
  }
}
