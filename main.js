const vinosTintos = [
  {
    nombre: "Gran Reserva",
    bodega: "Viña A",
    añoCosecha: 2015,
    tipoUva: "Cabernet Sauvignon",
    region: "Valle de Maipo",
    precio: 25.99,
  },
  {
    nombre: "Elegancia Tinta",
    bodega: "Viña B",
    añoCosecha: 2017,
    tipoUva: "Merlot",
    region: "Valle de Colchagua",
    precio: 22.5,
  },
  {
    nombre: "Roble Intenso",
    bodega: "Viña C",
    añoCosecha: 2018,
    tipoUva: "Malbec",
    region: "Valle de Mendoza",
    precio: 18.75,
  },
  {
    nombre: "Reserva Privada",
    bodega: "Viña D",
    añoCosecha: 2016,
    tipoUva: "Syrah",
    region: "Valle de Casablanca",
    precio: 30.25,
  },
  {
    nombre: "Vino de Autor",
    bodega: "Viña E",
    añoCosecha: 2019,
    tipoUva: "Pinot Noir",
    region: "Valle de Willamette",
    precio: 28.9,
  },
];

const vinosRosados = [
  {
    nombre: "Rosé Ecléctico",
    bodega: "Viña F",
    añoCosecha: 2020,
    tipoUva: "Garnacha",
    region: "Provenza",
    precio: 19.95,
  },
  {
    nombre: "Rosado Suave",
    bodega: "Viña G",
    añoCosecha: 2019,
    tipoUva: "Cinsault",
    region: "Valle de Loira",
    precio: 16.8,
  },
  {
    nombre: "Euforia Rosada",
    bodega: "Viña H",
    añoCosecha: 2021,
    tipoUva: "Tempranillo",
    region: "Valle de Napa",
    precio: 24.5,
  },
  {
    nombre: "Rosado Secreto",
    bodega: "Viña I",
    añoCosecha: 2018,
    tipoUva: "Sangiovese",
    region: "Valle de Salento",
    precio: 21.25,
  },
  {
    nombre: "Harmonía Rosé",
    bodega: "Viña J",
    añoCosecha: 2017,
    tipoUva: "Zinfandel",
    region: "Valle de Sonoma",
    precio: 26.8,
  },
];

const vinosBlancos = [
  {
    nombre: "Blanco Brillante",
    bodega: "Viña K",
    añoCosecha: 2020,
    tipoUva: "Sauvignon Blanc",
    region: "Valle de Marlborough",
    precio: 19.99,
  },
  {
    nombre: "Chardonnay Elegante",
    bodega: "Viña L",
    añoCosecha: 2019,
    tipoUva: "Chardonnay",
    region: "Valle de Limarí",
    precio: 22.75,
  },
  {
    nombre: "Riesling Fresco",
    bodega: "Viña M",
    añoCosecha: 2021,
    tipoUva: "Riesling",
    region: "Valle de Mosela",
    precio: 18.5,
  },
  {
    nombre: "Blanco del Valle",
    bodega: "Viña N",
    añoCosecha: 2018,
    tipoUva: "Albariño",
    region: "Valle de Rías Baixas",
    precio: 24.9,
  },
  {
    nombre: "Viognier Exquisito",
    bodega: "Viña O",
    añoCosecha: 2017,
    tipoUva: "Viognier",
    region: "Valle de Condrieu",
    precio: 27.3,
  },
];

let carrito = [];

function calcularTotal() {
  return carrito
    .reduce(function (total, item) {
      return total + item.cantidad * item.vino.precio;
    }, 0)
    .toFixed(2);
}

function buscarVinoPorDato(dato, arrayVinos) {
  for (let i = 0; i < arrayVinos.length; i++) {
    for (let prop in arrayVinos[i]) {
      if (
        arrayVinos[i].hasOwnProperty(prop) &&
        typeof arrayVinos[i][prop] === "string" &&
        arrayVinos[i][prop].toLowerCase().includes(dato.toLowerCase())
      ) {
        return arrayVinos[i];
      }
    }
  }
  return null;
}

let continuarComprando = true;

while (continuarComprando) {
  let datoVinoUsuario = prompt("Ingrese un dato del vino que está buscando:");

  let vinoEncontrado = buscarVinoPorDato(datoVinoUsuario, vinosTintos);

  if (!vinoEncontrado) {
    vinoEncontrado = buscarVinoPorDato(datoVinoUsuario, vinosRosados);
  }

  if (!vinoEncontrado) {
    vinoEncontrado = buscarVinoPorDato(datoVinoUsuario, vinosBlancos);
  }

  if (vinoEncontrado) {
    alert(
      "Detalles del vino:\n" +
        "Nombre: " + vinoEncontrado.nombre + "\n" +
        "Bodega: " + vinoEncontrado.bodega + "\n" +
        "Año de Cosecha: " + vinoEncontrado.añoCosecha + "\n" +
        "Tipo de Uva: " + vinoEncontrado.tipoUva + "\n" +
        "Región: " + vinoEncontrado.region + "\n" +
        "Precio: $" + vinoEncontrado.precio.toFixed(2)
    );

    let agregarAlCarrito = confirm("¿Desea agregar este vino al carrito?");

    if (agregarAlCarrito) {
      let cantidad = parseInt(prompt("Ingrese la cantidad de botellas que desea agregar al carrito:"));
  
      if (!isNaN(cantidad) && cantidad > 0) {
        carrito.push({ vino: vinoEncontrado, cantidad: cantidad });
        alert("Se ha agregado al carrito exitosamente.");
      } else {
        alert("La cantidad ingresada no es válida. No se ha agregado al carrito.");
      }
    }

  } else {
    alert("No se encontró ningún vino con el dato ingresado.");
  }

  continuarComprando = confirm(
    "¿Desea seguir buscando y agregar más productos al carrito?"
  );

  if (!continuarComprando) {
    alert("Total del carrito: $" + calcularTotal());
    break;
  }
}