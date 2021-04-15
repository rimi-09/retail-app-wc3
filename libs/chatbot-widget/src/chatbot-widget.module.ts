import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ChatbotWidgetComponent } from './chatbot-widget.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MatSortModule, MatTableModule } from '@angular/material'  

@NgModule({
  declarations: [ChatbotWidgetComponent,
    ChatInputComponent,
    ChatMsgComponent,
    ChatWindowComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    BrowserModule,
    BrowserAnimationsModule,
    //MatTableDataSource,
    //MatSort,
    MatSortModule,
    MatTableModule,
    BackbaseCoreModule.withConfig({
      classMap: { ChatbotWidgetComponent }
    })
  ]
})
export class ChatbotWidgetModule { }