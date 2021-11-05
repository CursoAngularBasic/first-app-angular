import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './page/hola-mundo/hola-mundo.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { SumaComponent } from './components/suma/suma.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    PrincipalComponent,
    SumaComponent,
    ButtonActionComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
