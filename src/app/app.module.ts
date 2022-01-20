import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopnavbarComponent } from 'src/navigation/topnavbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
