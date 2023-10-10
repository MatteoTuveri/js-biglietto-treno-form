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
        let price = document.querySelector("#price");
        price.innerHTML = (parseFloat((basePrice *km)*(1-youngDiscount)).toFixed(2)) + '€';
        const offer = document.querySelector("#offer");
        offer.innerHTML = `Young plan`;


    }
    else if(age === 'old'){
        let price =document.querySelector("#price");
        price.innerHTML = (parseFloat((basePrice *km)*(1-oldDiscount)).toFixed(2)) + '€';
        const offer = document.querySelector("#offer");
        offer.innerHTML = `Over 65 plan`;


    }
    else if (age === 'adult') {
        let price =document.querySelector("#price");
        price.innerHTML = (parseFloat(basePrice *km).toFixed(2)) + '€';
        const offer = document.querySelector("#offer");
        offer.innerHTML = `Basic plan`;


    }
    else if(age === 'null'){
        console.log('inserisci età');
    }
})

