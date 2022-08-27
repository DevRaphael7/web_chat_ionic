import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoListUserPageRoutingModule } from './to-do-list-user-routing.module';

import { ToDoListUserPage } from './to-do-list-user.page';
import { HeaderMenuComponent } from 'src/app/components/header-menu/header-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoListUserPageRoutingModule
  ],
  declarations: [ToDoListUserPage, HeaderMenuComponent]
})
export class ToDoListUserPageModule {}
