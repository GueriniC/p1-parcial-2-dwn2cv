'use strict';

/*
 *  Guerini, Clara
*   Kang, Ignacio
 */

// Clase Producto
class Producto {
    constructor(nombre, descripcion, precio, imagen, categoria) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
      this.categoria = categoria;
    }
  }
  
  // Array de productos
  const productos = [
    new Producto("Camisa", "Camisa a cuadros", 10.99, "imagen1.jpg", "Remera"),
    new Producto("Jean", "Jean recto", 15.99, "imagen2.jpg", "pantalón"),
    new Producto("Sweter", "Sweter hilo fino a rayas", 8.99, "imagen3.jpg", "abrigo"),
    new Producto("Pantalón", "Pantalón verde agua", 12.99, "imagen4.jpg", "pantalón"),
    new Producto("Chomba", "Verde agua", 9.99, "imagen5.jpg", "remera"),
    new Producto("Hoodie", "Hoodie 100% algodón", 11.99, "imagen6.jpg", "abrigo")
  ];
  
  // Clase Carrito
  class Carrito {
    constructor() {
      this.items = [];
    }
  
    agregarItem(item) {
      this.items.push(item);
    }
  
    eliminarItem(index) {
      this.items.splice(index, 1);
    }
  
    calcularTotal() {
      let total = 0;
      this.items.forEach((item) => {
        total += item.precio;
      });
      return total;
    }
  }
  
  const carrito = new Carrito();
  
  
  function mostrarDetalleCarrito() {
    const cartItemCount = document.getElementById("cart-item-count");
    const cartTotal = document.getElementById("cart-total");
  
    cartItemCount.textContent = carrito.items.length;
    cartTotal.textContent = carrito.calcularTotal().toFixed(2);
  }
  
  function agregarAlCarrito(producto) {
    carrito.agregarItem(producto);
    console.log("Producto agregado al carrito:", producto);
    mostrarDetalleCarrito();
  }
  
  function mostrarProductos() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

  
    productos.forEach((producto) => {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto");
  
      const nombreP = document.createElement("p");
      nombreP.textContent = producto.nombre;
      productoDiv.appendChild(nombreP);
  
      const descripcionP = document.createElement("p");
      descripcionP.textContent = producto.descripcion;
      productoDiv.appendChild(descripcionP);
  
      const precioP = document.createElement("p");
      precioP.textContent = "$" + producto.precio.toFixed(2);
      productoDiv.appendChild(precioP);
  
      const imagen = document.createElement("img");
      imagen.src = producto.imagen;
      productoDiv.appendChild(imagen);
  
      const categoriaP = document.createElement("p");
      categoriaP.textContent = "Categoría: " + producto.categoria;
      productoDiv.appendChild(categoriaP);
  
      const agregarBtn = document.createElement("button");
      agregarBtn.textContent = "Agregar al carrito";
      agregarBtn.addEventListener("click", () => agregarAlCarrito(producto));
      productoDiv.appendChild(agregarBtn);
  
      productList.appendChild(productoDiv);
    });
  }
 

  mostrarProductos("");
