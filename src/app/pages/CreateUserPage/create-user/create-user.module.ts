import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUserPageRoutingModule } from './create-user-routing.module';

import { CreateUserPage } from './create-user.page';
import { CreateAUserComponent } from '../create-auser/create-auser.component';
import { SpinnerComponentComponent } from 'src/app/components/spinner-component/spinner-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUserPageRoutingModule
  ],
  declarations: [CreateUserPage, CreateAUserComponent, SpinnerComponentComponent]
})
export class CreateUserPageModule {}
