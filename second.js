const form = document.getElementById('personal_information')
form.onsubmit = function submitHander(event) {
    event.preventDefault();
    let meetAllReruirements = true
 
    
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const cardPattern = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
    const monthPattern =/^JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC$/
    const yearPattern = /^[0-9]{4}$/
    const cvvPattern =/^[0-9]{3}$/

    
    let name = document.getElementById('name').value
    let password = document.getElementById('pass').value
    let confirmpassword = document.getElementById('password').value
    let phone = document.getElementById('phone').value
    let postcode = document.getElementById('postcode').value
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let province = document.getElementById('province').value
    let cardNumber = document.getElementById('cardNumber').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value
    let cvv = document.getElementById('cvv').value
    let email = document.getElementById('email').value

    if (name == '') {
        meetAllReruirements = false
        document.getElementById('name-message').style.display = 'block'
    } else {
        document.getElementById('name-message').style.display = 'none'
    }

    if (password == '') {
        meetAllReruirements = false
        document.getElementById('password-message').style.display = 'block'
    } 
     else {
        
        document.getElementById('password-message').style.display = 'none'
    }

    if (confirmpassword == '') {
        meetAllReruirements = false
        document.getElementById('Confirmpassword-message').style.display = 'block'
    } else if(confirmpassword!=password){
        meetAllReruirements = false
        document.getElementById('Confirmpassword-message').innerText = 'Password is not the same'
        document.getElementById('Confirmpassword-message').style.display = 'block'
    } else {
           
        document.getElementById('Confirmpassword-message').style.display = 'none'
    }

    if (phone == '') {
        meetAllReruirements = false
        document.getElementById('phone-message').style.display = 'block'
    } else {
           
        document.getElementById('phone-message').style.display = 'none'
    }

    if (postcode == '') {
        meetAllReruirements = false
        document.getElementById('postcode-message').style.display = 'block'
    } else {
           
        document.getElementById('postcode-message').style.display = 'none'
    }

    if (address == '') {
        meetAllReruirements = false
        document.getElementById('address-message').style.display = 'block'
    } else {
           
        document.getElementById('address-message').style.display = 'none'
    }


    if (!city) {
        meetAllReruirements = false
        document.getElementById('city-message').style.display = 'block'
    } else {
           
        document.getElementById('city-message').style.display = 'none'
    }

    province = document.getElementById('province').value
    if (!province) {
        meetAllReruirements = false
        document.getElementById('province-message').style.display = 'block'
    } else {
           
        document.getElementById('province-message').style.display = 'none'
    }

    if (cardNumber == '') {
        meetAllReruirements = false
        document.getElementById('card-message').style.display = 'block'
    } else if(!cardNumber.match(cardPattern)){
        meetAllReruirements = false
        document.getElementById('card-message').style.display = 'block'
        document.getElementById('card-message').innerText = "Invalid Number"
    }
     else {
           
        document.getElementById('password-message').style.display = 'none'
    }

    if (year == '') {
        meetAllReruirements = false
        document.getElementById('year-message').style.display = 'block'
    } else if(!year.match(yearPattern)){
        meetAllReruirements = false
        document.getElementById('year-message').style.display = 'block'
        document.getElementById('year-message').innerText = "Invalid Number"
    }
     else {
           
        document.getElementById('year-message').style.display = 'none'
    }

    if (month == '') {
        meetAllReruirements = false
        document.getElementById('month-message').style.display = 'block'
    } else if(!month.match(monthPattern)){
        meetAllReruirements = false
        document.getElementById('month-message').innerText = "Invalid Number"
        document.getElementById('month-message').style.display = 'block'

    }
     else {
           
        document.getElementById('month-message').style.display = 'none'
    }

    if (cvv == '') {
        meetAllReruirements = false
        document.getElementById('cvv-message').style.display = 'block'
    } else if(!cvv.match(cvvPattern)){
        meetAllReruirements = false
        document.getElementById('cvv-message').innerText = "Invalid Number"
        document.getElementById('cvv-message').style.display = 'block'

    }
     else {
           
        document.getElementById('cvv-message').style.display = 'none'
    }

    if (!email) {
        meetAllReruirements = false
        document.getElementById('email-message').style.display = 'block'
    } else if(!email.match(emailPattern)){
        meetAllReruirements = false
        document.getElementById('email-message').innerText = "Invalid input"
        document.getElementById('email-message').style.display = 'block'

    }
     else {
           
        document.getElementById('email-message').style.display = 'none'
    }

    console.log(meetAllReruirements)
    if (meetAllReruirements) {
        let parameters = location.href.split('?')[1]
        location.href = 'receipt.html?' + parameters + '&name=' + name + '&email=' + email +'&phone=' +phone +'&province='+province
    }
}