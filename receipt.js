const Tax = {
    alberta: 5,
    bc: 12,
    brunswick: 15,
    foundland: 15,
    northwest:5,
    scotia:15,
    manitoba:12,
    nunavut:5,
    ontario:13,
    Prince:15,
    quebec:15,
    saskatchewan:11,
    yukon:5
}
const itemName = ["Biryani","Burger","Chicken Wings","Fries","Pizza","Samosa"];
const itemPrice = [15.00,5.99,6.99,6.99,7.99,3.99];


let parameters = location.href.split('?')[1].split('&')
let parametersDict = {}
for (let i = 0; i < parameters.length; i++) {
    let kv = parameters[i].split('=')
    let k = kv[0]
    let v = kv[1]
    parametersDict[k] = v
}
parametersDict.itemQty = parametersDict.itemQty.split(',')
console.log(parametersDict)

let itemQty = parametersDict['itemQty']
console.log(itemQty);

let prod = document.getElementById('RProduct')
for (let i=0; i<itemQty.length;i++){
    if(itemQty[i]>0){
        let child = document.createElement('section')
        child.className = "child"

        let name = document.createElement('section')
        name.innerText = itemName[i]
        child.appendChild(name)
            
        let price = document.createElement('section')
        price.innerText = itemPrice[i]
        child.appendChild(price)
            
        let qty = document.createElement('section')
        qty.innerText = itemQty[i]
        child.appendChild(qty)

        prod.appendChild(child)
    }
}


document.getElementById('RName').innerText = "Name : " + parametersDict['name']
document.getElementById('RPhone').innerText = "Phone : " + parametersDict['phone']
document.getElementById('RProvince').innerText = "Province : " + parametersDict['province']
document.getElementById('REmail').innerText = "Email : " + parametersDict['email']

let subTotal=0;
for(let i=0; i<itemQty.length;i++){
    subTotal += itemQty[i]*itemPrice[i];
}

let tax = subTotal*Tax[parametersDict['province']]/100;

let total = subTotal+tax

document.getElementById('RSubTotal').innerText = "Sub total : " + subTotal.toFixed(2)
document.getElementById('RTax').innerText = "Tax : " + tax.toFixed(2)
document.getElementById('RTotal').innerText = "Total : " + total.toFixed(2)
