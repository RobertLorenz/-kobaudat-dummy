import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OekobaudatComponent } from './oekobaudat/oekobaudat.component';

@NgModule({
  declarations: [AppComponent, OekobaudatComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
