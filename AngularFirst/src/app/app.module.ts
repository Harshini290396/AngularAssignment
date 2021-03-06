import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule} from '@angular/forms';
import { ChangeThemeDirective } from './app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChangeThemeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
