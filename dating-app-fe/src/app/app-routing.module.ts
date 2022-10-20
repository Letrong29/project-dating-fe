import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./account/component/login/login.component";
import {TestComponent} from "./account/component/test/test.component";
import {AuthGuardService} from "./account/service/auth-guard.service";
import {TestAdminComponent} from "./account/component/test-admin/test-admin.component";


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
