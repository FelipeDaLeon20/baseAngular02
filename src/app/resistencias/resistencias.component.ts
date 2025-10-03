import { Component } from '@angular/core';
import { Resistencia } from './resistencia';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
color1:string='';
  color2:string='';
  color3:string='';
  tolerancia:string='';
  resultado:number=0;
  minimo:number=0;
  maximo:number=0;
  mostrarTabla:boolean=false;
 
 
  colorBase=[
    {nombre:'Negro', valor:0, color:'black'},
    {nombre:'Cafe', valor:1, color:'brown'},
    {nombre:'Rojo', valor:2, color:'red'},
    {nombre:'Naranja', valor:3, color:'orange'},
    {nombre:'Amarillo', valor:4, color:'yellow'},
    {nombre:'Verde', valor:5, color:'green'},
    {nombre:'Azul', valor:6, color:'blue'},
    {nombre:'Violeta', valor:7, color:'purple'},
    {nombre:'Gris', valor:8, color:'gray'},
    {nombre:'Blanco', valor:9, color:'white'}
  ];
 
  multiplicadores=[
    {nombre:'Negro', valor:1, color:'black'},
    {nombre:'Cafe', valor:10, color:'brown'},
    {nombre:'Rojo', valor:100, color:'red'},
    {nombre:'Naranja', valor:1000, color:'orange'},
    {nombre:'Amarillo', valor:10000, color:'yellow'},
    {nombre:'Verde', valor:100000, color:'green'},
    {nombre:'Azul', valor:1000000, color:'blue'},
    {nombre:'Violeta', valor:10000000, color:'purple'},
    {nombre:'Gris', valor:100000000, color:'gray' },
    {nombre:'Blanco', valor:1000000000, color:'white'}
  ];
 
  tolerancias=[
    {nombre:'Dorado', valor:0.05, color:'gold'},
    {nombre:'Plata', valor:0.10, color:'silver'}
  ];
 
 
 
 
  calcular() {
    let env = new Resistencia()
    env.color1 = this.color1;
    env.color2 = this.color2;
    env.color3 = this.color3;
    env.tolerancia = this.tolerancia;
 
    this.resultado = env.calcular();
    this.minimo = env.calcularMini();
    this.maximo = env.calcularMaxi();
    this.mostrarTabla = true;
  }
 
 
  pintar(color: string): string {
  switch (color) {
    case 'Negro': return 'black';
    case 'Cafe': return 'brown';
    case 'Rojo': return 'red';
    case 'Naranja': return 'orange';
    case 'Amarillo': return 'yellow';
    case 'Verde': return 'green';
    case 'Azul': return 'blue';
    case 'Violeta': return 'violet';
    case 'Gris': return 'gray';
    case 'Blanco': return 'white';
    case 'Dorado': return 'gold';
    case 'Plata': return 'silver';
    default: return 'black';
  }
}
}
