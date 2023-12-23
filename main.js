const vinosTintos = [
    {
      nombre: "Gran Reserva",
      bodega: "Viña A",
      anioCosecha: 2015,
      tipoUva: "Cabernet Sauvignon",
      region: "Valle de Maipo",
      precio: 25.99
    },
    {
      nombre: "Elegancia Tinta",
      bodega: "Viña B",
      anioCosecha: 2017,
      tipoUva: "Merlot",
      region: "Valle de Colchagua",
      precio: 22.50
    },
    {
      nombre: "Roble Intenso",
      bodega: "Viña C",
      anioCosecha: 2018,
      tipoUva: "Malbec",
      region: "Valle de Mendoza",
      precio: 18.75
    },
    {
      nombre: "Reserva Privada",
      bodega: "Viña D",
      anioCosecha: 2016,
      tipoUva: "Syrah",
      region: "Valle de Casablanca",
      precio: 30.25
    },
    {
      nombre: "Vino de Autor",
      bodega: "Viña E",
      anioCosecha: 2019,
      tipoUva: "Pinot Noir",
      region: "Valle de Willamette",
      precio: 28.90
    }
  ];
  
  const vinosRosados = [
    {
      nombre: "Rosé Ecléctico",
      bodega: "Viña F",
      anioCosecha: 2020,
      tipoUva: "Garnacha",
      region: "Provenza",
      precio: 19.95
    },
    {
      nombre: "Rosado Suave",
      bodega: "Viña G",
      anioCosecha: 2019,
      tipoUva: "Cinsault",
      region: "Valle de Loira",
      precio: 16.80
    },
    {
      nombre: "Euforia Rosada",
      bodega: "Viña H",
      anioCosecha: 2021,
      tipoUva: "Tempranillo",
      region: "Valle de Napa",
      precio: 24.50
    },
    {
      nombre: "Rosado Secreto",
      bodega: "Viña I",
      anioCosecha: 2018,
      tipoUva: "Sangiovese",
      region: "Valle de Salento",
      precio: 21.25
    },
    {
      nombre: "Harmonía Rosé",
      bodega: "Viña J",
      anioCosecha: 2017,
      tipoUva: "Zinfandel",
      region: "Valle de Sonoma",
      precio: 26.80
    }
  ];
  
  const vinosBlancos = [
    {
      nombre: "Blanco Brillante",
      bodega: "Viña K",
      anioCosecha: 2020,
      tipoUva: "Sauvignon Blanc",
      region: "Valle de Marlborough",
      precio: 19.99
    },
    {
      nombre: "Chardonnay Elegante",
      bodega: "Viña L",
      anioCosecha: 2019,
      tipoUva: "Chardonnay",
      region: "Valle de Limarí",
      precio: 22.75
    },
    {
      nombre: "Riesling Fresco",
      bodega: "Viña M",
      anioCosecha: 2021,
      tipoUva: "Riesling",
      region: "Valle de Mosela",
      precio: 18.50
    },
    {
      nombre: "Blanco del Valle",
      bodega: "Viña N",
      anioCosecha: 2018,
      tipoUva: "Albariño",
      region: "Valle de Rías Baixas",
      precio: 24.90
    },
    {
      nombre: "Viognier Exquisito",
      bodega: "Viña O",
      anioCosecha: 2017,
      tipoUva: "Viognier",
      region: "Valle de Condrieu",
      precio: 27.30
    }
  ];
  
  // Carrito de compra
  let carrito = [];
  
  function agregarAlCarrito(vino, cantidad) {
    let encontrado = false;
  
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].vino === vino) {
        carrito[i].cantidad += cantidad;
        encontrado = true;
        break;
      }
    }
 
    if (!encontrado) {
      carrito.push({ vino: vino, cantidad: cantidad });
    }
  
    console.log("Se agregaron al carrito:", cantidad, "botella(s) de", vino.nombre);
  }
  
  function calcularTotal() {
    return carrito.reduce(function(total, item) {
      return total + item.vino.precio * item.cantidad;
    }, 0).toFixed(2);
  }
  
  agregarAlCarrito(vinosTintos[0], 2);
  agregarAlCarrito(vinosBlancos[1], 1);
  
  function mostrarDetallesCarrito() {
    carrito.forEach(function(item) {
      console.log(item.cantidad + " botella(s) de " + item.vino.nombre + " - $" + (item.vino.precio * item.cantidad).toFixed(2));
    });
  }
  
  mostrarDetallesCarrito();
  console.log("Total del carrito: $" + calcularTotal());
  