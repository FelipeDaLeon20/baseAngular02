export class Resistencia {
  color1:string='';
  color2:string='';
  color3:string='';
  tolerancia:string='';
 
  Valor(color: string) {
    switch (color) {
      case 'Negro': return 0;
      case 'Cafe': return 1;
      case 'Rojo': return 2;
      case 'Naranja': return 3;
      case 'Amarillo': return 4;
      case 'Verde': return 5;
      case 'Azul': return 6;
      case 'Violeta': return 7;
      case 'Gris': return 8;
      case 'Blanco': return 9;
      default: return 0;
    }
  }
 
  multiplicar(color: string) {
    switch (color) {
      case 'Negro': return 1;
      case 'Cafe': return 10;
      case 'Rojo': return 100;
      case 'Naranja': return 1000;
      case 'Amarillo': return 10000;
      case 'Verde': return 100000;
      case 'Azul': return 1000000;
      case 'Violeta': return 10000000;
      case 'Gris': return 100000000;
      case 'Blanco': return 1000000000;
      default: return 0;
    }
  }
 
  Toleran(color: string) {
    switch (color) {
      case 'Dorado': return 0.05;
      case 'Plata': return 0.10;
      default: return 0;
    }
  }
 
  calcular() {
    const digito1 = this.Valor(this.color1);
    const digito2 = this.Valor(this.color2);
    const multiplicador = this.multiplicar(this.color3);
    const valorBase = (digito1 * 10 + digito2) * multiplicador;
 
    return parseFloat(valorBase.toFixed(2));
  }
 
  calcularToleran() {
    const valor1 = this.calcular();
    const porcentajeTolerancia = this.Toleran(this.tolerancia);
 
    return valor1 * porcentajeTolerancia;
  }
 
  calcularMini() {
    const valor = this.calcular();
    const toleranciaAbsoluta = this.calcularToleran();
 
    return parseFloat((valor - toleranciaAbsoluta).toFixed(2));
  }
 
  calcularMaxi() {
    const valor = this.calcular();
    const toleranciaAbsoluta = this.calcularToleran();
 
    return parseFloat((valor + toleranciaAbsoluta).toFixed(2));
  }
}