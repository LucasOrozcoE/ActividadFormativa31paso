import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent   {
  total:number=0;
  iva:number=0;
  mensaje:string="";
  subTotal=0;
  prod:any = {
    codigo:'',
    nombre:'',
    cantidad:0,
    precio:0,
  }
  
  productos = [{
      codigo:'1001', nombre:'Manzana',cantidad:'1', precio:'1000'},
      {codigo:'1002', nombre:'Naranja',cantidad:'2', precio:'900'},
      {codigo:'1003', nombre:'Piña',cantidad:'3', precio:'2000'}
  ]
  
  verificarProductos(){
    return this.productos.length>0;
  }
  
  agregar(){
    if(parseInt(this.prod.cantidad) > 0 && parseInt(this.prod.precio) > 0 ){ 
    for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].codigo == this.prod.codigo ){
          alert('El producto no se ha ingresado porque existe');    
          return;
        }   
      }
     
      }
      else{
        alert('Campos no validos!!')
        return;
     }
     this.productos.push({codigo:this.prod.codigo, 
                          nombre:this.prod.nombre,
                          cantidad:this.prod.cantidad,
                          precio:this.prod.precio});
     this.prod.codigo='';
     this.prod.nombre='';
     this.prod.cantidad='',
     this.prod.precio='';
  }
  
  seleccionar(prod:any){
    this.prod.codigo = prod.codigo;
    this.prod.nombre = prod.nombre;
    this.prod.cantidad=prod.cantidad;
    this.prod.precio = prod.precio;
  }
  
  eliminar(prod:any){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == prod.codigo){
        this.productos.splice(i,1);
        alert('El producto fue eliminado');
        return;
      }  
    }
    alert('El producto no se encontró');
  }
  
  modificar(){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == this.prod.codigo){
        this.productos[i].nombre = this.prod.nombre;
        this.productos[i].cantidad=this.prod.cantidad;
        this.productos[i].precio = this.prod.precio;
        return;
      }
    }
    alert('El código no existe!!')
    }

    comprar(){
      for(let i=0; i<this.productos.length; i++){
            this.subTotal+=parseInt(this.productos[i].precio)*parseInt(this.productos[i].cantidad);
      }
      this.iva=this.subTotal*0.19;
      this.total=this.subTotal*1.19;
     
      
     
    }
}
