// Mostrar burbujas de Seguros
function mostrarBurbujasSeguros() {
  const contenedor = document.getElementById('contenedor-productos');
  if (contenedor) {
    contenedor.classList.remove('con-detalle'); // Quita fondo blanco
    contenedor.innerHTML = `
      <h2 class="titulo-burbujas">Seguros</h2>
      <div class="grid-burbujas seguros">
        <div class="burbuja" onclick="mostrarDetalleSeguro(1)">Casa Habitación</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(2)">Seguro de Auto</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(3)">RC Médica</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(4)">Accidentes Personales</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(5)">Seguro Contra Cáncer</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(6)">Gastos Médicos Mayores</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(7)">Seguro Educativo</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(8)">Plan de Retiro</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(9)">Vida Total</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(10)">Negocio Protegido</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(11)">Estación de Servicio</div>
        <div class="burbuja" onclick="mostrarDetalleSeguro(12)">Accidentes Escolares</div>
      </div>
    `;
    ocultarBotonesIniciales();

    if (typeof seguros === 'undefined') {
      const script = document.createElement('script');
      script.src = 'js/seguros.js';
      script.onload = () => {
        console.log('seguros.js cargado correctamente');
      };
      document.body.appendChild(script);
    }
  }
}
window.mostrarBurbujasSeguros = mostrarBurbujasSeguros;

// Mostrar burbujas de Fianzas
function mostrarBurbujasFianzas() {
  const contenedor = document.getElementById('contenedor-productos');
  if (contenedor) {
    contenedor.classList.remove('con-detalle'); // Quita fondo blanco
    contenedor.innerHTML = `
      <h2 class="titulo-burbujas">Fianzas</h2>
      <div class="grid-burbujas fianzas">
        <div class="burbuja" onclick="mostrarDetalleFianza(1)">Cumplimiento</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(2)">Licitación</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(3)">Anticipo</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(4)">Vicios Ocultos</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(5)">Globales</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(6)">Judiciales</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(7)">Gas</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(8)">Administrativas</div>
        <div class="burbuja" onclick="mostrarDetalleFianza(9)">Fiscales</div>
      </div>
    `;
    ocultarBotonesIniciales();

    if (typeof fianzas === 'undefined') {
      const script = document.createElement('script');
      script.src = 'js/fianzas.js';
      script.onload = () => {
        console.log('fianzas.js cargado correctamente');
      };
      document.body.appendChild(script);
    }
  }
}
window.mostrarBurbujasFianzas = mostrarBurbujasFianzas;

// Ocultar solo los botones iniciales
function ocultarBotonesIniciales() {
  const botonesIniciales = document.querySelectorAll('.burbujas-container .burbuja');
  botonesIniciales.forEach((boton) => {
    boton.style.display = 'none';
  });
}

// Mostrar detalles de seguros
function mostrarDetalleSeguro(id) {
  const seguro = seguros[id];
  if (!seguro) return;

  const contenedor = document.getElementById('contenedor-productos');
  contenedor.classList.add('con-detalle');
  contenedor.innerHTML = `
    <button onclick="mostrarBurbujasSeguros()" class="volver-btn">← Volver</button>
    <h2>${seguro.titulo}</h2>
    <img src="Imagenes/${seguro.imagen}" alt="${seguro.titulo}">
    <p>${seguro.descripcion}</p>
    <h4>Beneficios</h4>
    <table class="tabla-beneficios">
      ${seguro.beneficios.map(b => `<tr><td>${b}</td></tr>`).join('')}
    </table>
  `;
}
window.mostrarDetalleSeguro = mostrarDetalleSeguro;


// Mostrar detalles de fianzas
function mostrarDetalleFianza(id) {
  const fianza = fianzas[id];
  if (!fianza) return;

  const contenedor = document.getElementById('contenedor-productos');
  contenedor.classList.add('con-detalle');
  contenedor.innerHTML = `
    <button onclick="mostrarBurbujasFianzas()" class="volver-btn">← Volver</button>
    <h2>${fianza.titulo}</h2>
    <img src="Imagenes/${fianza.imagen}" alt="${fianza.titulo}">
    <table class="tabla-beneficios">
      <tr><td>${fianza.descripcion}</td></tr>
    </table>
  `;
}
window.mostrarDetalleFianza = mostrarDetalleFianza;

