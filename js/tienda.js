


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


async function cargarRopa () {
  await fetch('../json/ropa.json')
        .then(respuesta =>respuesta.json())
        .then(  function(data){ 
          data.forEach(data => {

          
          let div = document.createElement ('div')
          div.className = 'col-lg-4 col-md-5 my-5 d-flex justify-content-center'
      
          div.innerHTML = 
              `
                  <div class="shadow" style="width: 18rem;">
                      <img src= "${data.foto}" class="card-img-top carta" alt="Presentacion">
                      <div class="card-body">
                          <h2 class="card-text Amatic prenda">
                              ${data.nombreDePrenda}
                          </h2>
                      <div class="d-flex justify-content-around precio">
                          <h4>$${data.precio}</h4>
                      </div>
                      <div class="d-flex justify-content-center py-1 ">
                          <a  class="Amatic fw-bold button" id ="btn${data.id}">AGREGAR AL CARRITO</a>
                      </div>
                  </div>
                `
              card.appendChild (div)
              
              ropa.push (new Ropa (data.id, data.nombreDePrenda, data.precio, data.color, data.talle, data.foto))
              
            
          })

          
          let btnAdd1 = document.getElementById ("btn1")
          let btnAdd2 = document.getElementById ("btn2")
          let btnAdd3 = document.getElementById ("btn3")
          let btnAdd4 = document.getElementById ('btn4')
          let btnAdd5 = document.getElementById ('btn5')
          let btnAdd6 = document.getElementById ('btn6')

          btnAdd1.addEventListener ('click', () =>{
            compras.push (new Compra(ropa[0]))  
            addCarro()
         })
          
           btnAdd2.addEventListener ('click', () =>{
              compras.push (new Compra(ropa[1]))  
              addCarro()
           })
              
           btnAdd3.addEventListener ('click', () =>{
              compras.push (new Compra(ropa[2]))
              addCarro()
           })
              
           btnAdd4.addEventListener ('click', () =>{
              compras.push (new Compra(ropa[3]))  
              addCarro() 
           })
           btnAdd5.addEventListener ('click', () =>{
              compras.push (new Compra(ropa[4]))  
              addCarro()
           })
           btnAdd6.addEventListener ('click', () =>{
              compras.push (new Compra(ropa[5]))  
              addCarro()
           })
        })
        .catch(console.log('Ha ocurrido un error'))
        

}



function addCarro(){
  console.log('click')

  localStorage.setItem ('Carrito', JSON.stringify(compras))
    
    Toastify({
      text: "Añadido al carrito",
      gravity: "top",
      style: {
        background: "#72ff47",
      }
    }).showToast();
    location.reload()
}
cargarRopa()



let carrito = document.getElementById ('carrito')
let carrito2 = document.getElementById ('carrito')
let button = document.querySelector ('.button')
let btnCompra = document.getElementById ('Compra')
let btnCancelar = document.getElementById ('Cancelar')
const ropa =[]
const compras = []
let card = document.getElementById ('card')
let almacenados = []
let total = 0








    
    
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

    


