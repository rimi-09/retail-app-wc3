import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'bb-chatbot-widget',
  templateUrl: './chatbot-widget.component.html',
  styles: []
})
export class ChatbotWidgetComponent implements OnInit {

  public msg: Subject<any> = new Subject();
  public msgArray: Observable<Array<any>> = new Observable<Array<any>>();

  constructor() { }

  ngOnInit(): void {
  }

  
  public onChange(target: any) {
    this.msg.next(target.value);
    target.value = '';
  }

  public onMsgReceive(msg: string) { }

}
