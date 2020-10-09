import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalComponent } from './animals/animal/animal.component';
import { AddAnimalComponent } from './animals/add-animal/add-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimalsComponent,
    AnimalComponent,
    AddAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
