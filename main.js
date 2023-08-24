// Función para calcular la cuota mensual
function calcularCuota(monto, plazo, tasa) {
    let tasaMensual = tasa / 100 / 12;
    return (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
  }
  
  // Función para mostrar el resultado
  function mostrarResultado(mensaje) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = mensaje;
  }
  
  // Función para manejar el botón de cálculo
  function calcular() {
    let monto = parseFloat(document.getElementById('monto').value);
    let plazo = parseInt(document.getElementById('plazo').value);
    let tasa = parseFloat(document.getElementById('tasa').value);
  
    let cuota = calcularCuota(monto, plazo, tasa);
    let mensaje = "Cuota mensual: $" + cuota.toFixed(2);
    mostrarResultado(mensaje);
  
    // Almacenar datos en el almacenamiento local
    localStorage.setItem('monto', monto);
    localStorage.setItem('plazo', plazo);
    localStorage.setItem('tasa', tasa);
  }
  
  // Cargar datos almacenados y mostrarlos al cargar la página
  window.addEventListener('load', function() {
    let monto = localStorage.getItem('monto');
    let plazo = localStorage.getItem('plazo');
    let tasa = localStorage.getItem('tasa');
  
    if (monto !== null && plazo !== null && tasa !== null) {
      document.getElementById('monto').value = monto;
      document.getElementById('plazo').value = plazo;
      document.getElementById('tasa').value = tasa;
    }
  });
  
  // Asignar la función de cálculo al botón
  document.getElementById('calcularBtn').addEventListener('click', calcular);
  