
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./share/home/home.component";


const routes: Routes = [{ path:"",
  component:HomeComponent
},
  {
    path :'share',
    loadChildren :()=>import('../app/share/share.module').then(module=>module.ShareModule)

  },{
  path:'account',
    loadChildren :()=>import('../app/account/account.module').then(module=>module.AccountModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


