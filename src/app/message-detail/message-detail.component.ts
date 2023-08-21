import { Component, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent {

  @Input() message?: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
