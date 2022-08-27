import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoListUserPage } from './to-do-list-user.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoListUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListUserPageRoutingModule {}
