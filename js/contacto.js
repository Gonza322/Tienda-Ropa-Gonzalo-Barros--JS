
class Consulta {
    constructor(nombre, apellido, mail, telefono, eleccion, comentario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.eleccion = eleccion;
        this.comentario = comentario;}
    }


const consultas = [];


let formulario = document.querySelector("#formulario");
let nombreInput = document.getElementById('nombre')
let apellidoInput = document.getElementById('apellido')
let emailInput = document.getElementById('email')
let telefonoInput = document.getElementById('telefono')
let comentariosInput = document.getElementById('comentario')
let eleccionInput = document.getElementById('eleccion')
let button = document.getElementById ('button')
let buttonAdd = document.getElementById('button-add')


nombreInput.addEventListener('keydown', () =>{console.log()})
apellidoInput.addEventListener('keydown', () =>{console.log()})
emailInput.addEventListener('keydown', () =>{console.log()})
telefonoInput.addEventListener('keydown', () =>{console.log()})
comentariosInput.addEventListener('keydown', () =>{console.log()})
eleccionInput.addEventListener('keydown', () =>{console.log()})




formulario.addEventListener('submit' , validarFormulario);

function validarFormulario (e){
    e.preventDefault()



    
    console.log(consultas)

    button.addEventListener('click', formularioEnviado ())


    function formularioEnviado(){

            if (nombreInput.value !='' && nombreInput.value != null && apellido.value != '' && apellidoInput.value != null && emailInput.value != '' && emailInput.value!= null && telefonoInput.value != '' && telefonoInput.value != null && eleccionInput.value != 'FORMA DE CONTACTAR' && comentariosInput.value != '' && comentariosInput.value != null){

                consultas.push (new Consulta (nombreInput.value, apellidoInput.value, emailInput.value, telefonoInput.value, eleccionInput.value, comentariosInput.value))
                Swal.fire({
                            title: 'Hecho!',
                            text: 'Formulario enviado!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                            })

        } else{
            Swal.fire({
                title: 'Error',
                text: 'Completa correctamente los datos',
                icon: 'error',
                confirmButtonText: 'Cool'
                })
        }



    
    
    }

}


