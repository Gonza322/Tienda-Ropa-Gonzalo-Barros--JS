


class Ropa {
    constructor(id,nombreDePrenda, precio, color, talle, foto){
        this.id = id;
        this.nombreDePrenda = nombreDePrenda;
        this.precio = precio;
        this.color = color;
        this.talle = talle;
        this.foto = foto;
        this.vendido = false;
    }

    vender (){

        this.vendido = true;
    }
}

class Compra {
    constructor (ropa){
        this.foto = ropa.foto;
        this.precio = ropa.precio;
    }
}

const ropas = [];
ropas.push (new Ropa (1,"TOP PRINCESS", 600 ,"Blanco y negro", "XS-S-M-L","../multimedia/ropa 4.jpeg"))
ropas.push (new Ropa (2,"HUSE ISLAND", 999 ,"Blanco y negro", "XS-S-M-L", "../multimedia/ropa 5.jpg"))
ropas.push (new Ropa (3,"CONJUNTO ARCOIRIS", 2500 ,"Arcoiris", "XS-S-M-L", "../multimedia/ropa 6.jpg"))
ropas.push (new Ropa (4,"BUZO VAN HELEN", 2130 ,"Blanco y negro", "XS-S-M-L", "../multimedia/ropa 7.jpg"))
ropas.push (new Ropa (5,"CAMISA CROP CALSSIC", 1100 ,"Negro", "XS-S-M-L", "../multimedia/ropa 8.jpg"))
ropas.push (new Ropa (6,"JEAN MOM KILA", 2999 ,"Azul", "XS-S-M-L", "../multimedia/ropa 9.jpg"))

let card = document.getElementById ('card')




for (const ropa of ropas){


    let div = document.createElement ('div')
    div.className = 'col-lg-4 col-md-5 my-5 d-flex justify-content-center'

    div.innerHTML = 
        `
            <div class="shadow" style="width: 18rem;">
                <img src= "${ropa.foto}" class="card-img-top carta" alt="Presentacion">
                <div class="card-body">
                    <h2 class="card-text Amatic prenda">
                        ${ropa.nombreDePrenda}
                    </h2>
                <div class="d-flex justify-content-around precio">
                    <h4>$${ropa.precio}</h4>
                </div>
                <div class="d-flex justify-content-center py-1 ">
                    <a  class="Amatic fw-bold button" id ="btnAdd${ropa.id}">AGREGAR AL CARRITO</a>
                </div>
            </div>
          `

        card.appendChild (div)
}

let btnAdd1 = document.getElementById ('btnAdd1')
let btnAdd2 = document.getElementById ('btnAdd2')
let btnAdd3 = document.getElementById ('btnAdd3')
let btnAdd4 = document.getElementById ('btnAdd4')
let btnAdd5 = document.getElementById ('btnAdd5')
let btnAdd6 = document.getElementById ('btnAdd6')
let carrito = document.getElementById ('carrito')
let carrito2 = document.getElementById ('carrito')
let button = document.querySelector ('.button')
let btnCompra = document.getElementById ('Compra')
let btnCancelar = document.getElementById ('Cancelar')
const compras = []
let almacenados = []
let total = 0

btnAdd1.addEventListener ('click', () =>{

    compras.push (new Compra(ropas[0]))
    localStorage.setItem ('Carrito', JSON.stringify(compras))


      
      Toastify({
        text: "Añadido al carrito",
        gravity: "top",
        style: {
          background: "#72ff47",
        }
      }).showToast();
      location.reload()
 })

 btnAdd2.addEventListener ('click', () =>{

    compras.push (new Compra(ropas[1]))
    localStorage.setItem ('Carrito', JSON.stringify(compras))


      Toastify({
        text: "Añadido al carrito",
        gravity: "top",
        style: {
          background: "#72ff47",
        }
      }).showToast();
      location.reload()
 })
    
 btnAdd3.addEventListener ('click', () =>{

    compras.push (new Compra(ropas[2]))
    localStorage.setItem ('Carrito', JSON.stringify(compras))

      Toastify({
        text: "Añadido al carrito",
        gravity: "top",
        style: {
          background: "#72ff47",
        }
      }).showToast();
      location.reload()  
 })
    
 btnAdd4.addEventListener ('click', () =>{

    compras.push (new Compra(ropas[3]))
    localStorage.setItem ('Carrito', JSON.stringify(compras))

      Toastify({
        text: "Añadido al carrito",
        gravity: "top",
        style: {
          background: "#72ff47",
        }
      }).showToast();
      location.reload()  
 })
 btnAdd5.addEventListener ('click', () =>{

    compras.push (new Compra(ropas[4]))
    localStorage.setItem ('Carrito', JSON.stringify(compras))

      Toastify({
        text: "Añadido al carrito",
        gravity: "top",
        style: {
          background: "#72ff47",
        }
      }).showToast();
      location.reload()  
 })
 btnAdd6.addEventListener ('click', () =>{

    compras.push (new Compra(ropas[5]))
    localStorage.setItem ('Carrito', JSON.stringify(compras))

      Toastify({
        text: "Añadido al carrito",
        gravity: "top",
        style: {
          background: "#72ff47",
        }
      }).showToast();
      location.reload()
 })
    
    
 almacenados = JSON.parse (localStorage.getItem('Carrito'))




if (almacenados != null)
{

  for (const object of almacenados){  
          compras.push (new Compra (object))
  } 
  for (const productos of compras){      
      let section = document.createElement  ('section')
      total += productos.precio
      section.innerHTML = `
        <section class=" d-flex pt-1" >
            <div class="px-5  hotpink carro  d-flex align-items-center w-20"><img src="${productos.foto}" alt="" class="card-img-carro"></div> <div class="px-5  hotpink carro w-20 d-flex align-items-center ">$${productos.precio}</div>    </div>
        </section>
        `
        carrito.appendChild (section)


        }
}

let section = document.createElement  ('section')
section.innerHTML = `
    <section class=" d-flex pt-1" >
    <div class="px-5  hotpink carro  d-flex align-items-center w-20">Total:</div> <div class="px-5  hotpink carro w-20 d-flex align-items-center ">$${total}</div>    </div>
    </section>
`
carrito.appendChild (section)


btnCancelar.addEventListener('click', () =>{
  localStorage.clear();
  location.reload()
})
   


btnCompra.addEventListener('click', ()=>{


  if(almacenados != null )
  {
      setTimeout(function(){
        Swal.fire({
          title: 'Gracias por su compra',
          text: 'Su compra ha sido realizada',
          icon: 'success',
          confirmButtonText: 'Cool'
          })
    }, 2000);

      setTimeout(function(){

        localStorage.clear();
        location.reload()
    }, 3500);

  }else {
    Swal.fire({
      title: 'Ups',
      text: 'No hay productos en el carrito!',
      icon: 'error',
      confirmButtonText: 'Cool'
      })
  }
})

    


