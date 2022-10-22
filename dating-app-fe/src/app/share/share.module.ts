import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListSearchComponent } from './list-search/list-search.component';
import {HttpClientModule} from "@angular/common/http";
import { Error404Component } from './error404/error404.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, ListSearchComponent, Error404Component],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        ShareRoutingModule,
        HttpClientModule,
        FormsModule,
    ]
})
export class ShareModule { }
