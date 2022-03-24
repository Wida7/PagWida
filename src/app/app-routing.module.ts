import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import { AngExercisesComponent } from './component/ang-exercises/ang-exercises.component';
const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'add-product'},
  {path: 'add-product', component:AddProductComponent},
  {path: 'list-product', component:ListProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent},
  {path: 'ang-exercises', component:AngExercisesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
