import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {TestComponent} from "./component/test/test.component";
import {AuthGuardService} from "../service/authentication/auth-guard.service";
import {TestAdminComponent} from "./component/test-admin/test-admin.component";



const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "test", component: TestComponent, canActivate: [AuthGuardService]
  },
  {
    path: "test-admin", component: TestAdminComponent, canActivate: [AuthGuardService]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
