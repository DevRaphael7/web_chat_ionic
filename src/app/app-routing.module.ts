import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'create-user',
    pathMatch: 'full'
  },
  {
    path: 'chat-page',
    loadChildren: () => import('./pages/chat-page/chat-page.module').then( m => m.ChatPagePageModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/CreateUserPage/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'to-do-list-user',
    loadChildren: () => import('./pages/to-do-list-user/to-do-list-user.module').then( m => m.ToDoListUserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
