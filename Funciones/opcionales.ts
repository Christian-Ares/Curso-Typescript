//Poniendo ? antes de los :, se convierte en opcional

const opcionales = (nombre: string, apellido: string, edad: number) => {
 if (edad) {
  console.log(`Se llama ${nombre}, su apellido es ${apellido}, y su edad es ${edad}`)
 }
 console.log(`Se llama ${nombre}, su apellido es ${apellido}`)
}

opcionales('Christian', 'Ares', 25)