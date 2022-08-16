const elements = [...document.querySelectorAll("input")];

const check = () => {
    const inputsChecks = elements.some(i => i.value === "");
    if (!inputsChecks) {
        const values = elements.map(i => i.value != "" ? i.value : 0);
        const total = values.reduce((prevVal, currVal) => prevVal + parseInt(currVal), 0);
        document.getElementById("unlimited-result").innerText = (total*1.1).toFixed(2);
        document.getElementById("lifetime-result").innerText = (total*1.2).toFixed(2);
    }
}

document.querySelectorAll(".rewards button").forEach(i =>{
    i.addEventListener('click', function(){
        const creatCard = {
            "Brex": 0.3,
            "Stripe": 2.9,
            "Amex": 1.3
        }
        document.querySelector(".rewards .result h3:last-of-type span").innerHTML = i.innerText;
        const inputsChecks = elements.some(i => i.value === "");
        const values = elements.map(i => i.value != "" ? i.value : 0);
        const total = values.reduce((prevVal, currVal) => prevVal + parseInt(currVal), 0);
        const element = document.querySelector(".rewards .result .right-side p#business-card-result");

        element.innerHTML = !inputsChecks && (total * creatCard[i.innerHTML]).toFixed(2);
        element.style.display = !inputsChecks && 'block';
        document.querySelector(".rewards .result h3:last-of-type").style.display = !inputsChecks && 'inline';
    })
})