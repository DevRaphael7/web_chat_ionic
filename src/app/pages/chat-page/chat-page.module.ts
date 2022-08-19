import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPagePageRoutingModule } from './chat-page-routing.module';

import { ChatPagePage } from './chat-page.page';
import { InputChatComponent } from './input-chat/input-chat.component';
import { HeaderMenuComponent } from 'src/app/components/header-menu/header-menu.component';
import { BubblesComponent } from './bubbles/bubbles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPagePageRoutingModule
  ],
  declarations: [ChatPagePage, InputChatComponent, HeaderMenuComponent, BubblesComponent]
})
export class ChatPagePageModule {}
