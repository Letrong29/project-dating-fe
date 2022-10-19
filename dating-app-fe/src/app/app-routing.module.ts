import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountCreateComponent} from './account/component/account-create/account-create.component';


const routes: Routes = [
  {path: 'register/account', component: AccountCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
