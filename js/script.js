"use strict";

const createDiv = ()=>document.createElement("div")
const createLabel = ()=>document.createElement("label")
const createButton = ()=>document.createElement("button")
const priceTotal = document.getElementById("price_total");


let degus = {
    1:{name:"Дегус толстый",price:50},
    2:{name:"Дегус белый",price:10},
    3:{name:"Дегус малый",price:20},
    4:{name:"Дегус серый",price:10},
    5:{name:"Микродегус",price:100}
}

document.querySelector(".t-nav").addEventListener("click",(e)=>{
    const resultDiv = document.querySelector("#result");
    
    const degus_id = document.getElementById(e.target.id).value;
    if (!document.getElementById(degus_id)){
        const degusDiv= createDiv();
        degusDiv.id = degus_id;
        degusDiv.className="row";

        const degusName = createDiv();
        degusName.innerText=degus[degus_id].name;
        degusName.className="col-5"
        degusName.id = "degus"+degus_id;

        const degusPrice = createDiv();
        degusPrice.innerText=degus[degus_id].price;
        degusPrice.className="col-1"
        degusPrice.id = "price"+degus_id;
        
        const countLabel = createDiv();
        countLabel.innerText = "Количество: ";
        countLabel.className="col-3 d-flex justify-content-end"

        const countDiv = createDiv();
        countDiv.className="col-3 d-flex"

        const count = createLabel();
        count.className = "cnt"
        count.innerText = "1";
        count.id = "count"+degus_id;

        const min_button = createButton();
        min_button.className = "btn btn-primary d-flex justify-content-center btn-count";
        min_button.innerText = "-"
        min_button.id = "min_button-"+degus_id;
        min_button.value=degus_id;

        const max_button = createButton();
        max_button.className = "btn btn-primary d-flex justify-content-center btn-count";
        max_button.innerText = "+"
        max_button.id = "max_button-"+degus_id;
        max_button.value=degus_id;

        degusDiv.appendChild(degusName);
        degusDiv.appendChild(degusPrice);
        degusDiv.appendChild(countLabel);
        degusDiv.appendChild(countDiv);
        countDiv.appendChild(min_button);
        countDiv.appendChild(count);
        countDiv.appendChild(max_button);
        resultDiv.appendChild(degusDiv);
    } else{
       let el = document.getElementById("count"+degus_id);
       el.innerText = Number(el.innerText)+1;
       el = document.getElementById("price"+degus_id);
       el.innerText = Number(el.innerText) + degus[degus_id].price;
    }
    priceTotal.innerText = Number(priceTotal.innerText)+degus[degus_id].price
});




document.querySelector("#result").addEventListener("click",(e)=>{
   const degus_el = document.getElementById(e.target.id);
   if ((degus_el) && (degus_el.tagName=='BUTTON')){
   
    const count = document.getElementById("count"+degus_el.value)
    const price = document.getElementById("price"+degus_el.value);
    if (degus_el.innerText === '+'){
    count.innerText = Number(count.innerText)+1;
    price.innerText = Number(price.innerText)+degus[degus_el.value].price
    priceTotal.innerText = Number(priceTotal.innerText)+degus[degus_el.value].price
    }
    else {
        count.innerText = Number(count.innerText)-1;
        price.innerText = Number(price.innerText)-degus[degus_el.value].price
        priceTotal.innerText = Number(priceTotal.innerText)-degus[degus_el.value].price
        if (count.innerText == "0"){
            document.getElementById(degus_el.value).remove();
        }
    }
   }

});

document.querySelector("#buy").addEventListener("click",(e)=>{
    const paymentInfo = {
        id: parseInt(Math.random()*1000),
        order: [],
        total_price:priceTotal.innerText
    }
    let order = {}
    const ch = document.getElementById('result')   
    for (let i=0;i<ch.childNodes.length;i++){
        let node = ch.childNodes[i];
        order = {id:node.id, 
            title:document.getElementById("degus"+node.id).innerText,
            count:document.getElementById("count"+node.id).innerText,
            price:document.getElementById("price"+node.id).innerText }
            paymentInfo.order.push(order);
    }
    console.log(JSON.stringify(paymentInfo));
});