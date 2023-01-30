import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TipComponent } from './tip/tip.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TipComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
