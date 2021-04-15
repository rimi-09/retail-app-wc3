import {
  Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef,
  ViewChild
} from '@angular/core';
import { from, Observable, Subject, Subscription  } from 'rxjs';
import { ChatbotService, ESendBy, Message } from 'libs/demo-services-module/src/chatbot/chatbot.service'
import {scan} from 'rxjs/internal/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'Chat-bot',
  templateUrl: './chat-window.component.html',
  styleUrls: []
})
export class ChatWindowComponent implements OnInit {

  @ContentChild(TemplateRef, {static: true}) template: TemplateRef<any>;
  @Input() msgTemplate: TemplateRef<any>;
  @Input() inputTemplate: TemplateRef<any>;
  @Input() msg: Subject<any>;
  @Output() onMsgReceive = new EventEmitter();
  @ViewChild('msgArea', { static: true }) msgArea: ElementRef;
  @ViewChild('defaultMsgTemplate', { static: true }) defaultMsgTemplate: TemplateRef<any>;
  @ViewChild('defaultInputTemplate', { static: true }) defaultInputTemplate: TemplateRef<any>;

  allMessages: Observable<Message[]>;
  quickRepliesButton: Subscription
  cxResultData: Subscription
  QuickReplies:any;
  cxResult : any;
  voiceResult:Subscription
  recorderButtonShowHide:boolean= true;
  loginReqquiredFlag:boolean = false;

  constructor(private dataService: ChatbotService, private router: Router) {}

  ngOnInit() {
    this.msgTemplate = this.msgTemplate ? this.msgTemplate : this.defaultMsgTemplate;
    this.inputTemplate = this.inputTemplate ? this.inputTemplate : this.defaultInputTemplate;
    this.allMessages = this.dataService.conversation.asObservable()
      .pipe(
        scan((acc, val) => {
          setTimeout(() => {
           this.msgArea.nativeElement.scrollTop = this.msgArea.nativeElement.scrollHeight;
          });
          if (ESendBy.bot === val[0].sendBy) {
            this.onMsgReceive.emit(val[0].content);
          }
          return acc.concat(val);
        } )
      )
      this.quickRepliesButton = this.dataService.quickReplies.subscribe((data:any)=>{
        this.QuickReplies = data
      })
      // this.cxResultData = this.dataService.cxResult.subscribe((data:any)=>{
      //   this.cxResult =  data;
      // })
      this.msg.subscribe((msg) => {
      this.dataService.converse(msg);
    })
    
  }

  public onChange(target: any) {
    this.msg.next(target.value);
    target.value = '';
  }
  public quickRepliesbuttonClick(inputText){
    this.dataService.converse(inputText);
    this.router.navigate(['transfers']);
    }
    
}
