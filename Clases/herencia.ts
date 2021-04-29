
class Padre {
 nombre:string
 edad:number

 constructor(_nombre:string, _edad:number){
  this.nombre = _nombre
  this.edad = _edad
 }

 mostrarNombre():void{
  console.log(this.nombre)
 }
}

class Hijo extends Padre{
 apellido:string

 constructor(_nombre:string, _edad:number, _apellido:string){
  super(_nombre, _edad)
  this.apellido = _apellido
 }

 mostrarNombrehijo():void{
  console.log(this.nombre)
 }
}

const nuevohijo = new Hijo('Christian',25,'Ares')