/*let estudiantes = [
    {
        nombre: 'Cata',
        apellido: 'Avila',
        edad: 25,
        tieneHijos: true,
        cantidadHijos: 1,
    },
    {
      nombre: 'Angelica',
      apellido: 'Fonseca',
      edad: 20,
      tieneHijos: true,
      cantidadHijos: 1  
    },
    {
      nombre: 'Daniel',
      apellido: 'Rosas',
      edad: 25,
      tieneHijos: false,
      cantidadHijos: 0  
    }
]*/

/**
 * Caracteristica de cada uno de los ítems de la lista de mercado:
 * nombre
 * precio
 * descipción
 */

let itemList = []

function addItem(){
    let nameItem = document.getElementById('nameItem').value
    let priceItem = document.getElementById('priceItem').value
    let descItem = document.getElementById('descItem').value

    if ( nameItem && priceItem && descItem ){
        itemList.push( { 'itemName': nameItem, 'itemPrice': priceItem, 'itemDesc': descItem }  )

        let html = ''
        itemList.forEach( (i, index) => {
            html += `<div class="row" >
                <div class="col" > ${i.itemName}  </div>
                <div class="col" > ${i.itemPrice}  </div>
                <div class="col" > ${i.itemDesc}  </div>
                <div class="col" > <button type="button" onclick="deleteItem(${index})" class="btn btn-danger" > X </button> </div> 
            </div>`
        } )
        localStorage.setItem('objectItems', JSON.stringify(itemList) )
        document.getElementById('showItemList').innerHTML = html
    }
}

function deleteItem(index){
    let objectItems = localStorage.getItem('objectItems')
    objectItems = JSON.parse(objectItems)
    objectItems.splice(index, 1)

    localStorage.setItem('objectItems', JSON.stringify(objectItems) )
    
}
