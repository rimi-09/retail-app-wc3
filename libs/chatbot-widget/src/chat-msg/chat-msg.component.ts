import {Component, Input, OnInit} from '@angular/core';
import Speech from 'speak-tts'

@Component({
  selector: 'chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: [],
})
export class ChatMsgComponent implements OnInit {
  @Input() msg: any;
  public isVisible = false;
  loginReqquiredFlag:boolean = false;
  html = "";
  result = "";
  speech: any;
  speechData: any;
  botvoiceplaybutton:boolean = true;
  constructor() {
    this.speech = new Speech();
    if(this.speech.hasBrowserSupport()) {
      //console.log("speech synthesis supported");
      this.speech
        .init({
          volume: 1,
          lang: "en-GB",
          rate: 1,
          pitch: 1,
          voice: "Google UK English Male",
          splitSentences: true,
        })
    }
   }

  ngOnInit() {
    this.isVisible = true
  }

  start() {
    this.speech
      .speak({
        text: this.msg.text
      })
      .then(() => {
        //console.log("Success !");
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
      
  }
  
}
