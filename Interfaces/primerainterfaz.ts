
interface Persona{
 nombre:string
 apellido:string

}

function caminar(persona:Persona):void{
 console.log('La persona' + persona.apellido + 'esta caminando')
}

let nueva_persona = {nombre:'Christian', apellido:'Ares', edad:25}

caminar(nueva_persona)