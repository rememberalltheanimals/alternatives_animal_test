import { Component } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { MESSAGES } from '../mock-messages';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  messages = MESSAGES;

  // messages: Message[] = [];

  selectedMessage?: Message;

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

  // onEditClick() {
  //   this.editMessage.emit(this.message.id);
  // }

  // submit(text: string): void {
  //   text = text.trim();
  //   if (!text) {return;}
  //   this.messageService.addMessage({text} as Message).subscribe(message => {this.messages.push(message);
  //   });
  // }

  constructor() {

   }

  ngOnInit(): void {
  }

  //getMessages(): void {
    //this.messageService.getMessage().subscribe(messages => this.messages = messages);
  //}

}

