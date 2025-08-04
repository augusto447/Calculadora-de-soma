function calcularSoma() {
  let primeiroNumero = parseInt(
    document.getElementById("primeiroNumero").value
  );
  let segundoNumero = parseInt(document.getElementById("segundoNumero").value);

  const SOMA = primeiroNumero + segundoNumero;

  const somaMostrar = document.getElementById("soma");
  somaMostrar.innerHTML = SOMA;
}
