import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { TitleComponent } from './component/title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './component/card/card.component';
import { CardTitleComponent } from './component/card/card-title/card-title.component';
import {CardAsideComponent} from './component/card/card-aside/card-aside.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleComponent,
    HomeComponent,
    CardComponent,
    CardAsideComponent, 
    CardTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
