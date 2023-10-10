const basePrice = 0.21;
const youngDiscount = 0.2;
const oldDiscount = 0.4;
let submit = document.querySelector("#submit");

submit.addEventListener('click',
function(){
    let name = document.getElementById("name").value;
    let km = parseInt(document.getElementById("km").value);
    let age = document.getElementById("age").value;

    if(km<=0 || isNaN(km)){
        console.log('inserire numero kilometri corretto');
    }
    else if(age === 'young'){
        let price = (basePrice *km)*(1-youngDiscount);
        console.log(price);
        console.log(age);
    }
    else if(age === 'old'){
        let price = (basePrice *km)*(1-oldDiscount);
        console.log(price);
        console.log(age);
    }
    else if (age === 'adult') {
        let price = basePrice *km;
        console.log(price);
        console.log(age);
    }
    else if(age === 'null'){
        console.log('inserisci età');
    }
})

