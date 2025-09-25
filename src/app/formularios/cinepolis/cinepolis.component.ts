import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
nombreC:string="";
numPersonas:string="";
tarjeta:string="";
numBoletos:string="";
totalNd:string="";
totalD:string="";
precioB:string="12";
max:number=0;

calcularMax():void
{
this.max=(parseInt(this.numPersonas)*7);
}
descQ():void
{
 this.totalD=(parseInt(this.totalD)-(parseInt(this.totalD)*0.15)).toString();
}
descD():void
{
this.totalD=(parseInt(this.totalD)-(parseInt(this.totalD)*0.10)).toString();
}
calcularT():void
{
this.totalD=(parseInt(this.precioB)*parseInt(this.numBoletos)).toString();
}
procesar():void
{
this.calcularMax();
if(parseInt(this.numBoletos)>this.max)
{
this.totalD="No se puede combrar mas de 7 boletos por persona";
}
else
{
if(parseInt(this.numBoletos)>5)
{
  this.calcularT();
  this.descQ();
  if(this.tarjeta=="0")
  {
    this.totalD=(parseFloat(this.totalD)*0.90).toString();
  }
}
else
{
  if(parseInt(this.numBoletos)>=3 && parseInt(this.numBoletos)<=5)
{
  this.calcularT();
  this.descD();
  if(this.tarjeta=="0")
  {
    this.totalD=(parseFloat(this.totalD)*0.90).toString();
  }
  
}
else
{
  if(parseInt(this.numBoletos)<=2)
{
  this.calcularT();
  if(this.tarjeta=="0")
  {
    this.totalD=(parseFloat(this.totalD)*0.90).toString();
  }
  
}
}
}



}
}
}
