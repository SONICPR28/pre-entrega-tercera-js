

//creacion de constructor
class Zapatillas {
    constructor(zapatillas, cantidad) {
      this.id = zapatillas.id;
      this.tipo = zapatillas.tipo;
      this.precio = zapatillas.precio;
      this.cantidad = cantidad;
      this.precioTotal = zapatillas.precio;
    }
  
    sumarUnidad() {
      this.cantidad++;
      this.actualizarPrecioTotal();
    }
  
    restarUnidad() {
      if (this.cantidad > 1) {
        this.cantidad--;
        this.actualizarPrecioTotal();
      }
    }
  
    actualizarPrecioTotal() {
      this.precioTotal = this.precio * this.cantidad;
    }
  }
  
  // Constantes y variables
  const zapatillas = [
    {
        id: 1,
        tipo: "AIRFORCE LOW",
        precio: 49000,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPi99Bds6wZ65Q3kkhBQWwFlM6HMeDDOkIcL9BxvjjnFUtzD_IBW_H82kT7YEGti1GLStbDuCnp-fdGp0YHoqSSxrtOlcmK8F2nQjCS2bzPJSixHcWSrfp&usqp=CAc",
        cantidad: 15,
      },
      {
        id: 2,
        tipo: "JORDAN HIGH",
        precio: 49900,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZ-0NR1fkczmv2ly8J2ILYAwVi07dW6EV_UTzQCLalNFUswqZwldL10iYmx1oJ-5CSMOUv6Pea9sNu7m759WzzXyh9z3yw7FXq6ftHKs1Rcm2yAr6CICkc4Q&usqp=CAc",
        cantidad: 100,
    },
    {
        id: 3,
        tipo: "JORDAN RETRO 4",
        precio: 59000,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFifjv80FHzs7deVLty0DTEBo823As_o1wof5AUuvE4MRY1zcpRsnPRzRP8pDi_JQ4InsvWUxXqtW1EoFG9_ezKHWDzML-2DcJXyWIL2usBjPkfwACH67R&usqp=CAc",
        cantidad: 5,
    },
    {
        id: 4,
        tipo: "JORDAN RETRO 5",
        precio: 49000,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcROa6WWmp2qKxkOU8VLNJoUPSZwyqfkrXah2u7umALmK55kcPMD-cTtAwcw7jfy0wpvQFajdeWH7vCdhIvvFtChvf5AEWMEu8xo4XbIdLKer2YJjthy5_oXXA&usqp=CAc",
        cantidad: 10,
    },
    {
        id: 5,
        tipo: "JORDAN RETRO 4 BLACK",
        precio: 69900,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTU5Myn1lj6DW9iistxdCqML5O7DT0j5yxK_OycnFy76e5rFBTMmorCBENno2rBq9yf-33q-lgEozTnf3bi_ySJveqW3ryM9bcDjuv0gazykhRfbBAlYAukg&usqp=CAc",
        cantidad: 50,
    },
    {
        id: 6,
        tipo: "JORDAN HIGH",
        precio: 79000,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwGMq2BWuTJbPf0hzRorTcaCLI_aNk57OctfUa_BbzDzg_jpgF74J1U-8a3y0eOfc7qwGdm-nKMrHz55ndEJnya7l-K4iCoLQUsPNfUlhKZIgD--RiOMls&usqp=CAc",
        cantidad: 2,
    },
    {
        id: 7,
        tipo: "JORDAN RETRO 4",
        precio: 69000,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3sKZPihHIiZBJK7CoWtmxpWWDWkTtdn_stgo2636Jy2o0Ujthv-ZC4B8CUfVKVKcYI8nCfTfiSZYmRKSxWo9kPO5poCC3w6e_MEGjP7yELMuQs47oC92W&usqp=CAc",
        cantidad: 3,
    },
    {
        id: 8,
        tipo: "JORDAN LOW",
        precio: 79000,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSmnnavcJ0nwHcyG5_c2pD8Rx8IgWeTzOgiGQheIr5qwR6cZFJoYVW5ygY-hAeJna7YBPePwhVWBFgIe2QTOjhxNHTwCU3DS9IelpfbylKIcRkT-fA7yq3TtA&usqp=CAc",
        cantidad: 11,}
    ];
  
  let carrito = [];
  
  function chequearCarritoEnStorage() {
    const contenidoEnStorage = localStorage.getItem("carritoEnStorage");
  
    if (contenidoEnStorage) {
      const array = JSON.parse(contenidoEnStorage).map((objeto) => {
        const zapatillas = new Zapatillas(objeto, objeto.cantidad);
        zapatillas.actualizarPrecioTotal();
        return zapatillas;
      });
  
      imprimirTabla(array);
  
      return array;
    }
  
    return [];
  }
  
  function guardarCarritoEnStorage() {
    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  }
  
  function imprimirProductosEnHTML(array) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    for (const zapatillas of array) {
      const card = document.createElement("div");
      card.innerHTML = `<br>
           
      <div class="col">
      <div class="card h-100">
      <img src="${zapatillas.img}" class="card-img-top grow" alt="zapatillas">
      <div class="card-body">
      <h2 class="card-title">${zapatillas.tipo}</h2>
      <h5 class="card-subtitle mb-2 text-muted">${zapatillas.descripcion}</h5>
      <p class="card-text"> CLP $${zapatillas.precio}</p>
    </div>
    <button id="agregar${zapatillas.id}" type="button" class="btn btn-dark">Agregar</button>
  </div>
    </div>
    `;
  
      contenedor.appendChild(card);
  
      const boton = document.getElementById(`agregar${zapatillas.id}`);
      boton.addEventListener("click", () => agregarAlCarrito(zapatillas.id));
    }
  }

  function agregarAlCarrito(idProducto) {
    const zapatillasCarrito = carrito.find((elemento) => elemento.id === idProducto);
  
    if (zapatillasCarrito) {
      const index = carrito.findIndex((elemento) => elemento.id === zapatillasCarrito.id);
      carrito[index].sumarUnidad();
      carrito[index].actualizarPrecioTotal();
    } else {
      carrito.push(new Zapateria(zapatillas.find((zapatillas) => zapatillas.id === idProducto), 1));
    }
  
    guardarCarritoEnStorage();
    imprimirTabla(carrito);
  }
  
  function eliminarDelCarrito(id) {
    const index = carrito.findIndex((zapatillas) => zapatillas.id === id);
  
    if (index !== -1) {
      if (carrito[index].cantidad > 1) {
        carrito[index].restarUnidad();
        carrito[index].actualizarPrecioTotal();
      } else {
        carrito.splice(index, 1);
      }
  
      guardarCarritoEnStorage();
      imprimirTabla(carrito);
    }
  }
  
  function eliminarCarrito() {
    carrito = [];
    localStorage.removeItem("carritoEnStorage");
  
    document.getElementById("carrito").innerHTML = "";
    document.getElementById("acciones-carrito").innerHTML = "";
  }
  
  function obtenerPrecioTotal(array) {
    return array.reduce((total, elemento) => total + elemento.precioTotal, 0);
  }
  
  function imprimirTabla(array) {
    const precioTotal = obtenerPrecioTotal(array);
    const contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";
  

    const tabla = document.createElement("div");
  
    
    tabla.innerHTML = `
      <table id="tablaCarrito" class="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cantidad</th>
            <th>Precio (CLP)</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody id="bodyTabla">
        </tbody>
      </table>
    `;
  
    contenedor.appendChild(tabla);
  
  
    const bodyTabla = document.getElementById("bodyTabla");
  
    for (const zapatillas of array) {
      const datos = document.createElement("tr");
      datos.innerHTML = `
        <td>${zapatillas.tipo}</td>
        <td>${zapatillas.cantidad}</td>
        <td>$${zapatillas.precioTotal}</td>
        <td><button id="eliminar${zapatillas.id}" class="btn btn-dark">Eliminar</button></td>
        
      `;
  
      bodyTabla.appendChild(datos);
  
      const botonEliminar = document.getElementById(`eliminar${zapatillas.id}`);
      botonEliminar.addEventListener("click", () => eliminarDelCarrito(zapatillas.id));
      
    }
  
      
    const pagarCarrito = document.getElementById("acciones-carrito");
    pagarCarrito.innerHTML = `
    <h5>Precio Total: CLP $${precioTotal}</h5>
    <button id="vaciarCarrito" onclick="eliminarCarrito()" class="btn btn-dark">Vaciar Carrito</button>
    <button id="pagarCarrito" onclick="mostrarMensaje()" class="btn btn-dark">Pagar Carrito</button>
`;

const botonPagarCarrito = document.getElementById("pagarCarrito");
botonPagarCarrito.addEventListener("click", mostrarMensaje);

function mostrarMensaje() {
  alert("Gracias por tu compra, serás dirigido al sitio web de pagos");
}

  }
  function filtrarBusqueda(e) {
    e.preventDefault();
  
    const ingreso = document.getElementById("busqueda").value.toLowerCase();
    const arrayFiltrado = zapatillas.filter((elemento) => elemento.tipo.toLowerCase().includes(ingreso));
  
    imprimirProductosEnHTML(arrayFiltrado);
  }
  
  const btnFiltrar = document.getElementById("btnFiltrar");
  btnFiltrar.addEventListener("click", filtrarBusqueda);
  
  imprimirProductosEnHTML(zapatillas);
  
  carrito = chequearCarritoEnStorage();
  
  

