
const mostrar3 = (nombre:string, apellido:string, edad:number = 25) => {
 return `Se llama ${nombre} se apellida ${apellido} y tiene ${edad} años`
}

console.log(mostrar3('Christian', 'Ares', 25)) 

console.log(mostrar3('Ana', 'Otero')) 