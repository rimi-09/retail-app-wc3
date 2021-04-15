import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'libs/demo-services-module/src/chatbot/chatbot.service'


@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html'
})

export class ChatInputComponent implements OnInit {
  myplaceHolder: string = 'write your query'
  recorderButtonShowHide:boolean= true;
  querysendButtonShowHide:boolean = true;

  constructor(private service: ChatbotService) {
    this.service.voiceConversation();
  }
  ngOnInit() {
    this.recorderButtonShowHide = this.service.isStoppedSpeechRecog;
  }
  startService(){
    this.service.start()
    this.recorderButtonShowHide = !this.recorderButtonShowHide;
    this.querysendButtonShowHide = !this.querysendButtonShowHide;
  }
  stopService(){
    this.service.stop()
    this.recorderButtonShowHide = !this.recorderButtonShowHide;
    this.querysendButtonShowHide = true;
  }

  checkPlaceHolder() {
    if (this.myplaceHolder) {
      this.myplaceHolder = ""
      return;
    } else {
      this.myplaceHolder = 'Type a query'
      return
    }
  }  
}