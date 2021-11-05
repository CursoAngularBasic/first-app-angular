import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaMundoComponent } from './page/hola-mundo/hola-mundo.component';
import { PrincipalComponent } from './page/principal/principal.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
