import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    component: ApiComponent
  },
  {
    path: 'register',
    component: UserComponent
  },
  // {
  //   path: 'implicit/callback',
  //   component: OktaCallbackComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
