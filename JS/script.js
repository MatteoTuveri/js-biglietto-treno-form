const basePrice = 0.21;
const youngDiscount = 0.2;
const oldDiscount = 0.4;
let submit = document.querySelector("#submit");

submit.addEventListener('click',
    function () {
        let name = document.getElementById("name").value;
        let km = parseInt(document.getElementById("km").value);
        let age = document.getElementById("age").value;
        document.getElementById("ticket-box").classList.remove("d-none");
        

        if (km <= 0 || isNaN(km)) {
            document.getElementById("ticket-allert").innerHTML = `inserire numero kilometri corretto`;
                        document.getElementById("ticket").classList.add("d-none");
        }
        else if (age === 'null') {
            document.getElementById("ticket-allert").innerHTML = `Scegli la fascia d'età`;
                        document.getElementById("ticket").classList.add("d-none");
        }
        else if (name === '' || isNaN(parseInt(name))===false) {
            document.getElementById("ticket-allert").innerHTML = `Inserire nome corretto`;
                        document.getElementById("ticket").classList.add("d-none");
        }
        else {
            document.getElementById("ticket-allert").innerHTML = `Il tuo biglietto`;
            document.getElementById("ticket").classList.remove("d-none");
            document.querySelector("#passenger").innerHTML = name;

            if (age === 'young') {
                let price = document.querySelector("#price");
                price.innerHTML = (parseFloat((basePrice * km) * (1 - youngDiscount)).toFixed(2)) + '€';
                document.querySelector("#offer").innerHTML = `Young plan`;


            }
            else if (age === 'old') {
                let price = document.querySelector("#price");
                price.innerHTML = (parseFloat((basePrice * km) * (1 - oldDiscount)).toFixed(2)) + '€';
                document.querySelector("#offer").innerHTML = `Over 65 plan`;



            }
            else if (age === 'adult') {
                let price = document.querySelector("#price");
                price.innerHTML = (parseFloat(basePrice * km).toFixed(2)) + '€';
                document.querySelector("#offer").innerHTML = `Basic plan`;


            }
        }


    })

