
class Animal{
 private nombre:string
 private tamaño:number
 public constructor(_nombre:string, _tamaño:number) {
  this.nombre = _nombre
  this.tamaño = _tamaño
 }

 public moverse():void{
  console.log('Movimiento')
 }
}

const obj = new Animal('Serpiente', 2)

obj.moverse()