let permiso:boolean = true

class Persona{
 public nombre:string

 constructor(nombre:string){
  this.nombre = nombre
 }

 get getNombre():string{
  return this.nombre
 }

 set setNombre(nombre:string){
 if(permiso){
  this.nombre = nombre
 } else{
   console.log('No tienes permiso para esto')
  }
 }
}

const obj = new Persona('Christian')

console.log(obj.getNombre)