import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  formOfProducts:FormGroup;
  InfoID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { 
    this.InfoID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.InfoID);
    this.crudService.ConsultProduct(this.InfoID).subscribe(
      resp=>{
        console.log(resp);
        this.formOfProducts.setValue({
          nombre:resp[0]['nombre'],
          precio:resp[0]['precio']    
        })
      }
    );

    this.formOfProducts=this.formulario.group({
      nombre:[''],
      precio:['']
    })
  
  }

  ngOnInit(): void {
  }

  sendData():any{
    console.log(this.InfoID);
    console.log(this.formOfProducts.value);
    this.crudService.EditarProducto(this.InfoID,this.formOfProducts.value).subscribe(()=>{

      'Utilizamos el ruteador importado para redireccionar cuando se agregue un producto'
      this.ruteador.navigateByUrl('/list-product');
    });

    

  }

}
