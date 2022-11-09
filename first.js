const itemQty =[0,0,0,0,0,0];
const itemPrice = [15.00,5.99,6.99,6.99,7.99,3.99];

function incrementItem(id){
    switch(id){
        case "birInc":
        let count = parseInt(document.getElementById("biryaniQty").innerText);
        count++;
        document.getElementById("biryaniQty").innerText = count;
        itemQty[0]=count;
        break;

        case "burInc":
        let count1= parseInt(document.getElementById("burgerQty").innerText);
        count1++;
        document.getElementById("burgerQty").innerText = count1;
        itemQty[1]=count1;
        break;

        case "winInc":
        let count2= parseInt(document.getElementById("wingsQty").innerText);
        count2++;
        document.getElementById("wingsQty").innerText = count2;
        itemQty[2]=count2;
        break;

        case "friInc":
        let count3= parseInt(document.getElementById("friesQty").innerText);
        count3++;
        document.getElementById("friesQty").innerText = count3;
        itemQty[3]=count3;
        break;

        case "pizInc":
        let count4= parseInt(document.getElementById("pizzaQty").innerText);
        count4++;
        document.getElementById("pizzaQty").innerText = count4;
        itemQty[4]=count4;
        break;

        case "samInc":
        let count5= parseInt(document.getElementById("samosaQty").innerText);
        count5++;
        document.getElementById("samosaQty").innerText = count5;
        itemQty[5]=count5;
        break;

    }
}

function decrementItem(id){
    switch(id){
        case "birDec":
        let count = parseInt(document.getElementById("biryaniQty").innerText);
        if(count>0){
            count--;
        }
        document.getElementById("biryaniQty").innerText = count;
        itemQty[0]=count;
        break;

        case "burDec":
        let count1= parseInt(document.getElementById("burgerQty").innerText);
        if(count1>0){
            count1--;
        }
        document.getElementById("burgerQty").innerText = count1;
        itemQty[1]=count1;
        break;

        case "winDec":
        let count2= parseInt(document.getElementById("wingsQty").innerText);
        if(count2>0){
            count2--;
        }
        document.getElementById("wingsQty").innerText = count2;
        itemQty[2]=count2;
        break;

        case "friDec":
        let count3= parseInt(document.getElementById("friesQty").innerText);
        if(count3>0){
            count3--;
        }
        document.getElementById("friesQty").innerText = count3;
        itemQty[3]=count3;
        break;

        case "pizDec":
        let count4= parseInt(document.getElementById("pizzaQty").innerText);
        if(count4>0){
            count4--;
        }
        document.getElementById("pizzaQty").innerText = count4;
        itemQty[4]=count4;
        break;

        case "samDec":
        let count5= parseInt(document.getElementById("samosaQty").innerText);
        if(count5>0){
            count5--;
        }
        document.getElementById("samosaQty").innerText = count5;
        itemQty[5]=count5;
        break;

    }
}


function checkout(){
    let sum=0;
    let qty=0;
    for(let i=0; i<itemQty.length;i++){
        sum += itemQty[i]*itemPrice[i];
        qty += itemQty[i];
    }   
    if(sum<10){
        document.getElementById("checkoutError").innerText = "Cart value should be more than 10$";
        document.getElementById("checkoutError").style.display = "block";
        return;
    }
    else if(qty<2){
        document.getElementById("checkoutError").innerText = "Minimum number of items should be 2";
        document.getElementById("checkoutError").style.display = "block";
        return;
    }
    console.log(sum);
    window.location.href = "form.html?itemQty="+itemQty.join(",");
}