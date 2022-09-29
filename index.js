window.onload = (event) => {
  var precioPizza = document.getElementById('precio-pizza');
  var nombrePizza = document.getElementById('nombre-pizza');
  var ingredientesPizza = document.getElementById('ingredientes-pizza');
  var imgPizza = document.getElementById("img-pizza");
  console.log(localStorage.getItem);

  if (localStorage.length > 0) {
      precioPizza.textContent = localStorage.getItem("precioPizza");

      nombrePizza.textContent = localStorage.getItem("nombrePizza");

      ingredientesPizza.textContent = localStorage.getItem("ingredientesPizza");

      imgPizza.setAttribute('src', localStorage.getItem("imagenPizza"));
  } else {
      imgPizza.setAttribute('src', '/img/logo.jpg');
  }
};
  let pizza1 = {
    id: "1",
    nombre: "Comun",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "orégano",
      "aceitunas",
    ],
    precio: "1200",
    imagen:"/img/pizaa1.jpg"
  }

  let pizza2 = {
    id: "2",
    nombre: "Napolitana",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "albahaca",
      "aceite de oliva",
    ],
    precio: "1600",
    imagen:"/img/pizza2.jpg"
  }

  let pizza3 ={
    id: "3",
    nombre: "Clasica",
    ingredientes: ["Jamón y Queso", "Aceitunas", "orégano", ],
    precio: "1450",
    imagen:"/img/pizza3.jpg"
  }

  let pizza4 ={
    id:"4",
    nombre: "Burger",
    ingredientes: [
      "Jamón",
      "Tocineta",
      "Peperoni",
      "Queso",
      "Oregano",
    ],
    precio: "1350",
    imagen:"/img/pizza4.jpg"
  }
  
  let pizza5 ={
    id:"5",
    nombre: "Especial",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "jamón",
      "huevo",
      "morrones",
      "aceitunas",
    ],
    precio: "1700",
    imagen:"/img/pizza5.jpg"
  }
  
  let pizza6 ={
    id: "6",
    nombre: "Vegetarina",
    ingredientes: [
      "Tomate disecado",
      "Peperoni",
      "Queso",
      "aceitunas",
    ],
    precio:"1250",
    imagen:"/img/pizza6.jpg"
  }

  let pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]
  let listado = document.getElementById('listado-pizzas');
  
  const buscarPizza = () => {
      let valueid = document.getElementById('value-id').value;
      var precioPizza = document.getElementById('precio-pizza');
      var nombrePizza = document.getElementById('nombre-pizza');
      var ingredientesPizza = document.getElementById('ingredientes-pizza');
      var inputVacio = document.getElementById('input-vacio');
      var imgPizza = document.getElementById("img-pizza");
      inputVacio.textContent = "";
      precioPizza.textContent = "";
      nombrePizza.textContent = "";
      ingredientesPizza.textContent = "";
      imgPizza.setAttribute('src', '/img/logo.jpg');
  
      if (valueid == "") return inputVacio.textContent = "Debes ingresar un valor numerico."
  
      var found = pizzas.find(function(post, index) {
          inputVacio.textContent = ""
          if (post.id == valueid) {
              precioPizza.textContent = post.precio;
              localStorage.setItem("precioPizza", post.precio);
              nombrePizza.textContent = post.nombre;
              localStorage.setItem("nombrePizza", post.nombre);
              ingredientesPizza.textContent = post.ingredientes.join(", ");
              localStorage.setItem("ingredientesPizza", post.ingredientes.join(", "));
              imgPizza.setAttribute('src', post.imagen);
              localStorage.setItem("imagenPizza", post.imagen);
              return true;
          }
      });
  
      if (found == undefined) return inputVacio.textContent = "El codigo ingresado es incorrecto."
  
  
  }
 