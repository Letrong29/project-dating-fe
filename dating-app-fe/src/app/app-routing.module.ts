import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./share/home/home.component";
import {FriendlistComponent} from "./friend/component/friendlist/friendlist.component";
import {AuthGuardService} from "./service/authentication/auth-guard.service";
import {SearchComponent} from "./user/component/search/search.component";


const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('../app/account/account.module').then(module => module.AccountModule)
  },

  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'share',
    loadChildren: () => import('../app/share/share.module').then(module => module.ShareModule)

  },
  {
    path: 'friend',
    loadChildren: () => import('../app/friend/friend.module').then(module => module.FriendModule)
  },{
    path: 'search',
    loadChildren: () => import('../app/user/user.module').then(module => module.UserModule)
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


