import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  btnActive: boolean = false;
  btnError: boolean = false;

  constructor(private messagesSevice : MessagesService) { }

  ngOnInit(): void {
  }

  submitMessage(f: NgForm, name: HTMLInputElement, message: HTMLTextAreaElement) {

      if (f.value.name == '' || f.value.text == ''){
        // @ts-ignore
        document.getElementById('btn-write').innerText = 'Write a message first!'
        this.btnActive = true
        setTimeout(()=>{
          this.btnActive = false
          // @ts-ignore
          document.getElementById('btn-write').innerText = 'Write'
        }, 1500)
      }else{
        this.btnActive = true
        // @ts-ignore
        document.getElementById('btn-write').innerText = 'Success!'
        this.messagesSevice.writeMessage(f.value.name, f.value.text)

        setTimeout(()=>{
          this.btnActive = false
          // @ts-ignore
          document.getElementById('btn-write').innerText = 'Write'
          name.value = ''
          message.value = ''
        }, 1500)
      }
    }
}
