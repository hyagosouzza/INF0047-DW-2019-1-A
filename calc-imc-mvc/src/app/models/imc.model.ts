export class IMC {

  calcularIMC(peso: number, altura: number): number {

    const imc = Number.parseFloat((peso / (altura * altura)).toFixed(2));

    return imc;
  }
}