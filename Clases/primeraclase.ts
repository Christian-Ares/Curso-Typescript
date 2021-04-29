
class Vehiculo {
 marca:string
 fecha:string
 puertas:number

 constructor(marca_:string, fecha_:string, puertas_:number){
  this.marca = marca_
  this.fecha = fecha_
  this.puertas = puertas_
 }

 acelerar():void{
  console.log('Acelerar')
 }

 frenar():void{
  console.log('Frenar')
 }
}

const coche = new Vehiculo('Ford', '12/7/2018', 5)

coche.marca
console.log(coche.marca)

coche.fecha
console.log(coche.fecha)

coche.acelerar()

coche.frenar()