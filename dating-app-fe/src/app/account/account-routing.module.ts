import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountCreateComponent} from './component/account-create/account-create.component';


const routes: Routes = [
  {path: 'register/account', component: AccountCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
