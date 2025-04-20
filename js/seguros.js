const seguros = {
    1: {
      titulo: "Línea Habbit (Casa Habitación)",
      imagen: "Segu_Casa.png",
      descripcion: "Cubrimos el patrimonio formado por tu casa y sus contenidos derivado de incendio o de fenómenos naturales, así como el robo. Lo puede contratar cualquier persona ya sea física o moral que sea:<table><tr><td>Propietario</td></tr><tr><td>Inquilino</td></tr><tr><td>Arrendador</td></tr></table>",
      beneficios: [
        "Es posible contratar en moneda nacional o dólares americanos",
        "Cobertura amplia en el ramo de incendio, excepto las exclusiones mencionadas en las condiciones generales de la póliza",
        "Amplia gama de posibilidades en coberturas y sumas aseguradas"
      ]
    },
    2: {
      titulo: "Seguro de Auto",
      imagen: "Segu_Carro.png",
      descripcion: "Sabemos la importancia del conductor y la responsabilidad al llevar acompañantes. Este seguro ofrece coberturas amplias como daños materiales, robo total y accidentes, además de protección en México, EE.UU. y Canadá.",
      beneficios: [
        "Descuento por perfil del conductor, edad, sexo, ocupación y código postal",
        "Descuentos en la renovación por fidelidad del cliente y/o por no siniestro"
      ]
    },
    3: {
      titulo: "Responsabilidad Civil Médicos",
      imagen: "Segu_GMM.png",
      descripcion: "Permite afrontar demandas de pacientes insatisfechos, cubriendo daños y perjuicios, asesoría legal, fianza y gastos de defensa.",
      beneficios: [
        "Cumple con los requisitos de la Comisión Nacional de Arbitraje Médico",
        "Permite al médico practicar libremente su actividad con responsabilidad"
      ]
    },
    4: {
      titulo: "Accidentes Personales Individual",
      imagen: "Segu_AccPerso.png",
      descripcion: "Protección por muerte accidental, pérdidas orgánicas, reembolso de gastos médicos, funerarios e indemnización por hospitalización.",
      beneficios: [
        "Protección ante accidentes laborales o personales",
        "Póliza desde 3 hasta 330 días o anual, adaptada a tus posibilidades"
      ]
    },
    5: {
      titulo: "Segucáncer",
      imagen: "Segu_Cancer.png",
      descripcion: "Cubre atención médica hospitalaria y gastos funerarios a causa del cáncer. Reembolsa gastos sin importar si se usó otra póliza.",
      beneficios: [
        "Reembolso de gastos incluso con otras pólizas",
        "Incluye asistencia médica 24/7 con MedicallHome",
        "Cobertura por servicios médicos, descuentos y ambulancia"
      ]
    },
    6: {
      titulo: "Seguro de Gastos Médicos Mayores",
      imagen: "Segu_GMM_2.png",
      descripcion: "Cubre gastos médicos por enfermedad o accidente. Atención en hospitales de alta calidad y planes personalizados.",
      beneficios: [
        "Amplia red médica y hospitalaria",
        "Reinstalación automática de suma asegurada",
        "Pago directo o reembolso de siniestros",
        "Asistencia médica y dental",
        "Descuento del 10% si tu IMC está en rango ideal (20-55 años)"
      ]
    },
    7: {
      titulo: "Seguro Educa",
      imagen: "Segu_Edu.png",
      descripcion: "Plan de ahorro para la educación de tus hijos. Protege su futuro incluso si tú faltas.",
      beneficios: [
        "Ahorro garantizado al final del plazo",
        "Descuentos por no fumar y sexo femenino",
        "Cobertura por fallecimiento o invalidez total",
        "Contratable desde el 6to mes de embarazo",
        "Adelanto por enfermedad terminal"
      ]
    },
    8: {
      titulo: "Retiro Activo",
      imagen: "Segu_Retiro.png",
      descripcion: "Plan de ahorro para el retiro, ajustable a la inflación. Crea un patrimonio mientras vives con protección.",
      beneficios: [
        "Ahorro garantizado al final",
        "Pago único o rentas vitalicias",
        "Adelanto por enfermedad terminal",
        "Pago inmediato por fallecimiento",
        "Segunda opinión médica"
      ]
    },
    9: {
      titulo: "Multivida Total",
      imagen: "Segu_MultiTotal.png",
      descripcion: "Seguro de vida que combina hasta 4 planes de protección y ahorro según tus necesidades.",
      beneficios: [
        "Pago inmediato para gastos finales",
        "Adelanto por enfermedad terminal",
        "Descuentos por no fumar y sexo femenino",
        "Personalización de protección",
        "Sumas aseguradas ajustables y en dólares"
      ]
    },
    10: {
      titulo: "Comercio Integral",
      imagen: "Segu_ComeIntegral.png",
      descripcion: "Cubre negocios pequeños o medianos. Ideal para escuelas, restaurantes, oficinas, etc.",
      beneficios: [
        "Cobertura completa en una sola póliza",
        "Costo accesible",
        "Variedad de coberturas y sumas aseguradas"
      ]
    },
    11: {
      titulo: "Estación Segura",
      imagen: "Segu_Estacion.png",
      descripcion: "Cubre estaciones de servicio de gasolina o diésel para venta al público.",
      beneficios: [
        "Cobertura completa en una sola póliza",
        "Costo competitivo",
        "Variedad de coberturas y sumas aseguradas"
      ]
    },
    12: {
      titulo: "Seguro Colectivo de Accidentes Escolares",
      imagen: "Segu_AccEscuela.png",
      descripcion: "Cubre alumnos y personal docente ante accidentes en actividades escolares o en trayectos a la escuela.",
      beneficios: [
        "Cobertura ante eventualidades escolares",
        "Protección en trayectos",
        "Aplica en todo México"
      ]
    }
  };
  
  function mostrarDetalle(id) {
    const seguro = seguros[id];
    if (!seguro) return;
    document.getElementById('lista-seguros').style.display = 'none';
    document.getElementById('detalle-seguro').style.display = 'block';
  
    let html = `<h3>${seguro.titulo}</h3>`;
    html += `<img src="Imagenes/${seguro.imagen}" alt="${seguro.titulo}">`;
    html += `<p>${seguro.descripcion}</p>`;
    html += `<h4>Beneficios</h4><table>`;
    seguro.beneficios.forEach(b => html += `<tr><td>${b}</td></tr>`);
    html += `</table>`;
  
    document.getElementById('contenido-seguro').innerHTML = html;
  }
  
  function volverALaLista() {
    document.getElementById('detalle-seguro').style.display = 'none';
    document.getElementById('contenido-seguro').innerHTML = '';
    document.getElementById('lista-seguros').style.display = 'block';
  }
  