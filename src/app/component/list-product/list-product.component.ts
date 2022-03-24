import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  Productos:any;

  constructor(    
    private crudService:CrudService
    ) {}

  ngOnInit(): void {

    this.crudService.GetProduct().subscribe(resp=>{console.log(resp)
    this.Productos=resp;
    
    });    
  }

  deleteData(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Esta seguro de eliminar este dato?"))
    {
      this.crudService.DeleteProduct(id).subscribe((
        resp)=>{
            this.Productos.splice(iControl,1);
    });
  }}
}
