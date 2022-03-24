import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formOfProducts:FormGroup;

  constructor(
    
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) {

    this.formOfProducts=this.formulario.group({
      nombre:[''],
      precio:['']
    });

  }

  ngOnInit(): void {
  }
    sendData():any{

      'Validación de la capturación de los datos en mi formulario'
      console.log(this.formOfProducts.value);

      'Enviamos los datos por el evento creado CrudService'
      this.crudService.AddProduct(this.formOfProducts.value).subscribe(resp=>{
        
        'Utilizamos el ruteador importado para redireccionar cuando se agregue un producto'
        this.ruteador.navigateByUrl('/list-product');
      
      });
    }
}
