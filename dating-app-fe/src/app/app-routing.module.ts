import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./share/home/home.component";



const routes: Routes = [{ path:"",
  component:HomeComponent
},
  {
    path :'share',
    loadChildren :()=>import('../app/share/share.module').then(module=>module.ShareModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
