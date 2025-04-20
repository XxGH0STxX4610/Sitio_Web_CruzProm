const fianzas = {
    1: {
      titulo: "Cumplimiento",
      imagen: "Fia_Cum.png",
      descripcion: "Garantiza la ejecución de los trabajos o suministro en forma y tiempo determinados en el contrato o pedido."
    },
    2: {
      titulo: "Licitación o Concurso",
      imagen: "Fia_Lici.png",
      descripcion: "Garantiza el sostenimiento de la oferta presentada."
    },
    3: {
      titulo: "Anticipo",
      imagen: "Fia_Anticipo.png",
      descripcion: "Garantiza la correcta inversión y amortización del recurso entregado, para inicio de los trabajos o suministro."
    },
    4: {
      titulo: "Vicios Ocultos o Calidad",
      imagen: "Fia_Vicio.png",
      descripcion: "Garantiza durante 365 días posteriores a la recepción de los trabajos o a la entrega de suministro, la calidad de los materiales y mano de obra de los trabajos realizados o del suministro recepcionado."
    },
    5: {
      titulo: "Globales o Individuales",
      imagen: "Fia_Global.png",
      descripcion: "Garantiza la reparación de un daño patrimonial realizada por un empleado desleal, en la comisión de delitos como robo, fraude y abuso de confianza."
    },
    6: {
      titulo: "Judiciales",
      imagen: "Fia_Judicial.png",
      descripcion: "Garantiza las obligaciones determinadas en los acuerdos emitidos por autoridad judicial."
    },
    7: {
      titulo: "Suministro de Gasolinas, Diésel y Gas LP",
      imagen: "Fia_Gasolina.png",
      descripcion: "Garantiza el pago de las líneas de crédito otorgadas para la compra de producto."
    },
    8: {
      titulo: "Fianzas Administrativas",
      imagen: "Fia_Admin.png",
      descripcion: "Concesiones, permisos y arrendamiento."
    },
    9: {
      titulo: "Fianzas Fiscales",
      imagen: "Fia_Fianzas.png",
      descripcion: "Inconformidad y convenio de pagos."
    }
  };
  
  function mostrarFianza(id) {
    const fianza = fianzas[id];
    if (!fianza) return;
  
    document.getElementById('lista-fianzas').style.display = 'none';
    document.getElementById('detalle-fianza').style.display = 'block';
  
    let html = `<h3>${fianza.titulo}</h3>`;
    html += `<img src="Imagenes/${fianza.imagen}" alt="${fianza.titulo}">`;
    html += `<p>${fianza.descripcion}</p>`;
  
    document.getElementById('contenido-fianza').innerHTML = html;
  }
  
  function volverAFianzas() {
    document.getElementById('detalle-fianza').style.display = 'none';
    document.getElementById('contenido-fianza').innerHTML = '';
    document.getElementById('lista-fianzas').style.display = 'block';
  }
