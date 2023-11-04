import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasListComponent } from './plantas-list/plantas-list.component';



const routes: Routes = [
  { path: 'plantas-List', component: PlantasListComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
