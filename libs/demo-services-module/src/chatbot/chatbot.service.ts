import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject} from 'rxjs';

export class Message {
  constructor(public content: string, public sendBy: ESendBy, public loginRequired:boolean) {}
}

export enum ESendBy {
  user = 'user',
  bot = 'bot'
}
declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  baseUrl = 'http://52.147.193.71:8080/gateway/api/conversation-api-service/conversations'
  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  text = '';
  tempWords : any;
  responseData: any = [];
  activeContexts : any = [];
  responseType = "text"
  loginReqquiredFlag:boolean = false;
  conversation = new BehaviorSubject<Message[]>([]);
  quickReplies =  new BehaviorSubject<any>([]);
  cxResult =  new BehaviorSubject<any>([]);
  voicemsg = new Subject<any>();

  constructor(private http: HttpClient) { 
    this.initialConv();
  }

  voiceConversation() {
    this.recognition.interimResults = false;
    this.recognition.lang = 'en-US';
    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      this.responseType = "voice"
      this.converse(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }

   converse(msg: string) {
   // window.BB.config.cx;
    const userMessage = new Message(msg, ESendBy.user, true);
    this.update(userMessage);
    const param = {
      query : msg,
      responseType : this.responseType,
      contexts : this.activeContexts ? this.activeContexts : []
    }
    return this.http.post<any>(this.baseUrl, param).subscribe((res:any) => {
      this.responseData = res;
      this.activeContexts = res.activeContexts;
      // if(this.responseData.parameters && this.responseData.parameters.loginrequired){
      //   this.loginReqquiredFlag =  this.responseData.parameters.loginrequired;
      //  }
        const speech = res.response
        const botMessage = new Message(speech, ESendBy.bot, true);
        this.update(botMessage);
        this.quickReplies.next(res)
        //let quickReplies = [];
        // if(res.quickReplies !== null){
        //   quickReplies = res.quickReplies.map((data: any) => {
        //     return data;          
        //   });
        //   this.quickReplies.next(quickReplies)
        // }
        // else if(res.cxResult !== null) {
        //   Object.keys(res.cxResult).map((value :any) =>{
        //     if(res.cxResult[value].products && res.cxResult[value].products.length > 0){
        //       quickReplies.push({accountType :res.cxResult[value].name, values: res.cxResult[value].products })
        //     }
        // });
        // console.log("quickReplies"+quickReplies);
        // this.quickReplies.next(quickReplies)
        // }
      });
  }

 update(msg: Message) {
    msg["loginRequired"] = this.loginReqquiredFlag;
    this.conversation.next([msg]);
  }

  initialConv() {
    const param = {
      query : 'hi',
      responseType : this.responseType,
      contexts : this.activeContexts ? this.activeContexts : []
    }
     this.http.post<any>(this.baseUrl, param).subscribe((res:any) => {
      this.responseData = res;
      this.activeContexts = res.activeContexts;
      const speech = res.response
      const botMessage = new Message(speech, ESendBy.bot, true);
      this.update(botMessage);
        let quickReplies = [];
        if(res.quickReplies !== null){
          quickReplies = res.quickReplies.map((data: any) => {
            return data;          
          });
          this.quickReplies.next(quickReplies)
        }
        else if(res.cxResult !== null) {
          //let arr = []
          Object.keys(res.cxResult).map((value :any) =>{
            if(res.cxResult[value].products && res.cxResult[value].products.length > 0){
              quickReplies.push({accountType :res.cxResult[value].name, values: res.cxResult[value].products })
            }
        });
        console.log("quickReplies"+quickReplies);
        this.quickReplies.next(quickReplies)
        }
      });
  }

}

