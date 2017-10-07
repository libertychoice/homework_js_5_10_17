"use strict";


const createDiv = ()=>document.createElement("div")
const createLabel = ()=>document.createElement("label")
const createButton = ()=>document.createElement("button")
const price_total = document.getElementById("price_total");


let degus = {
    1:{name:"Дегус толстый",price:50},
    2:{name:"Дегус белый",price:10},
    3:{name:"Дегус малый",price:20},
    4:{name:"Дегус серый",price:10},
    5:{name:"Микродегус",price:100}
}

document.querySelector(".t-nav").addEventListener("click",(e)=>{
    const resultDiv = document.querySelector("#result");
    
    let degus_id = document.getElementById(e.target.id).value;
    //console.log(degus_id);
    if (!document.getElementById(degus_id)){
        let degusDiv= createDiv();
        //degusDiv.innerHTML=degus[degus_id];
        degusDiv.id = degus_id;
        degusDiv.className="row";

        const degusName = createDiv();
        degusName.innerText=degus[degus_id].name;
        degusName.className="col-5"

        const degusPrice = createDiv();
        degusPrice.innerText=degus[degus_id].price;
        degusPrice.className="col-1"
        degusPrice.id = "price"+degus_id;
        
        

        const countLabel = createDiv();
        countLabel.innerText = "Количество: ";
        //countLabel.className = "c_label"
        countLabel.className="col-3 d-flex justify-content-end"

        // const minDiv = createDiv();
        // minDiv.className="col-1"
        const countDiv = createDiv();
        countDiv.className="col-3 d-flex"
        const count = createLabel();
        count.className = "cnt"
        count.innerText = "1";
        count.id = "count"+degus_id;

        // const maxDiv = createDiv();
        // maxDiv.className="col-1";


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
        //degusDiv.appendChild(minDiv);
        degusDiv.appendChild(countDiv);
        countDiv.appendChild(min_button);
        countDiv.appendChild(count);
        //degusDiv.appendChild(maxDiv);
        
        countDiv.appendChild(max_button);
        resultDiv.appendChild(degusDiv);
    } else{
       let el = document.getElementById("count"+degus_id);
       el.innerText = Number(el.innerText)+1;
       el = document.getElementById("price"+degus_id);
       el.innerText = Number(el.innerText) + degus[degus_id].price;
    }
    
    price_total.innerText = Number(price_total.innerText)+degus[degus_id].price
    //api.getPosts()
    //.then(data=>{   
    //   const ul = createUl()
    //   data.map(el=>{
     //       const li=createLi()
     //       li.textContent = el.title
     //       ul.appendChild(li)
      //  })
     //   resultDiv.appendChild(ul)
       // document.querySelector("#result").appendChild(ul)
    //})
       
});




document.querySelector("#result").addEventListener("click",(e)=>{
    let degus_el = document.getElementById(e.target.id);
    console.log(degus_el)

   if ((degus_el) && (degus_el.tagName=='BUTTON')){
   
    let count = document.getElementById("count"+degus_el.value)
    let price = document.getElementById("price"+degus_el.value);
    if (degus_el.innerText === '+'){
    count.innerText = Number(count.innerText)+1;
    
    price.innerText = Number(price.innerText)+degus[degus_el.value].price
    price_total.innerText = Number(price_total.innerText)+degus[degus_el.value].price
    }
    else {
        count.innerText = Number(count.innerText)-1;
        price.innerText = Number(price.innerText)-degus[degus_el.value].price
        price_total.innerText = Number(price_total.innerText)-degus[degus_el.value].price
        if (count.innerText == "0"){
            document.getElementById(degus_el.value).remove();
        }
    }
   }

});

// document.querySelector("#").addEventListener("click",(e)=>{
//     const resultDiv = document.querySelector("#result");
//     resultDiv.appendChild(degusDiv);
// });