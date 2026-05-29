export const numeroALetras = (num) => {
  const n = parseInt(num);
  if (isNaN(n) || n < 1 || n > 1000) return "Por favor, ingresa un número entre 1 y 1000.";
  if (n === 1000) return "MIL";

  const unidades = ["", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"];
  const decenas = ["", "DIEZ", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
  const especiales = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
  const centenas = ["", "CIEN", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];

  let u = n % 10;
  let d = Math.floor((n % 100) / 10);
  let c = Math.floor(n / 100);
  let resultado = "";

  if (c > 0) {
    if (c === 1 && (d > 0 || u > 0)) resultado += "CIENTO ";
    else resultado += centenas[c] + " ";
  }

  if (d === 1) {
    resultado += especiales[u];
  } else if (d > 1) {
    resultado += decenas[d];
    if (u > 0) resultado += " Y " + unidades[u];
  } else if (u > 0) {
    resultado += unidades[u];
  }

  return resultado.trim();
};