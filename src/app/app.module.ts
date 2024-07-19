import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassesLvlComponent } from './classes/classes-lvl/classes-lvl.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ClassesComponent, ClassesLvlComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
