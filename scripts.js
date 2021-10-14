
/*var suma = 0;
for (var i = 0; i <= 4; i++) {
    suma = suma + i
}
console.log('La sumatoría es:  ' + suma)

 
function recorrerUnNumero(){
   var suma = 0;
   for (var i = 0; i <= 4; i++) {
       suma = sumatoria(suma, i)
   }
   console.log('La sumatoría es:  ' + suma)
}


function sumatoria(suma, i){
   return suma + i
}

recorrerUnNumero()
console.log('---- Suma nueva -- ', sumatoria(50, 20))


function multiplicar(numero){
   res = 0
   console.log(`Los resultados de la tabla del: ${numero} es:`)
   for(let i = 0; i <= 10; i++){
       res = numero * i 
       console.log(`${i} * ${numero} =  ${res}`)
   }
}

multiplicar(8)


function TablaDeMultiplicar(){
   var tabla = 8
   var racion = 10
   for(var i = 1; i <=racion; i++) {
      console.log(tabla + "X" + i + "=" + (tabla * i))
}
}

TablaDeMultiplicar()*/


//var number = prompt('Por favor ingresa un número')

/*for( var i = 1; i <= number;  i++ ){
    if ( (i % 2 == 0) ){
        console.log('Este número ' + i + ' es par...')      
    }
    console.log('El número es: ' + i)
}

for( var i = 3; i <= number; i+=3 ){
    console.log('El número es: ', i)
}*/



var datosEstudiante= [ "Daniel", 25, true, ['Sammy', 'Tommy'] ]

datosEstudiante.push('Cañaveral')

for( var i = 0; i < datosEstudiante.length; i++  ){
        console.log( datosEstudiante[i] )
}










