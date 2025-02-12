import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title-component/title.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { InfosComponentComponent } from './infos-component/infos-component.component';
import { MultiplyByPipe } from './multiply-by.pipe';
import { PipeCostumComponent } from './pipe-costum/pipe-costum.component';

@NgModule({
  declarations: [
    AppComponent, TitleComponent, TextComponentComponent, InfosComponentComponent, MultiplyByPipe, PipeCostumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
