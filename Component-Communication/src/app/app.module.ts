import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { ParentWithFormComponent } from './parent-with-form/parent-with-form.component';
import { VoltageDropComponent } from './parent-with-form/voltage-drop/voltage-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    ParentWithFormComponent,
    VoltageDropComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
