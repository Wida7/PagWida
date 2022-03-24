import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/productos/'
  constructor(private clientHttp:HttpClient) { }

  AddProduct(dataProduct:product):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",dataProduct);
  }

  GetProduct(){
    return this.clientHttp.get(this.API);
  }

  DeleteProduct(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }

  ConsultProduct(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }

  EditarProducto(id:any,dataProduct:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,dataProduct);
  }
}
