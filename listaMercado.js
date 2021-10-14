//let itemList = []

let itemList = localStorage.getItem('items')
if (itemList) {
    itemList = itemList.split(',')
} else {
    itemList = []
}


//itemList = itemList ? itemList.split(',')  : []

/**
 * If ternario
 * 
 * Cuando se cumple la condición ejecuta lo que está después del ? y antes de los :
 * Cuando NO SE CUMPLE la condición se ejecuta lo que está después de los :
 * 
 * 1 == 1 ? alert('Si es unoi') : console.error('No es uno') --->Si se cumple
 * 1 == 0 ? alert('Si es unoi') : console.error('No es uno') --->No se cumple
 */



showList()

console.log('Arreglo sin llenar', itemList)
function addItem() {
    let itemValue = document.getElementById('item').value
    //itemValue.value.length -> obtenemos el tamaño del valor del input.
    //if ( itemValue){
    if (itemValue.length > 0) {
        itemList.push(itemValue)
        saveStorage()
        showList()
    } else {
        alert('Debes llenar el campo')
    }
}

function showList() {
    let html = ''
    for (let i = 0; i < itemList.length; i++) {
        html += `<div class="row" >
            <div class="col" > ${itemList[i]}  </div>
            <div class="col" > <button type="button" onclick="deleteItem(${i})" class="btn btn-danger" > X </button> </div> 
        </div>`
    }
    document.getElementById('showItemList').innerHTML = html
}

function deleteItem(index){
    itemList.splice(index, 1)
    saveStorage()
    showList()
}

function saveStorage(){
    localStorage.setItem('items', itemList)
}