import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ListProductComponent } from './component/list-product/list-product.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngExercisesComponent } from './component/ang-exercises/ang-exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    AngExercisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
