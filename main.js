/*fundamentos javascript*/
import * as calc from "./fundamentos.js";
import * as executOrder from "./ordemDeExecução.js";
import * as funcAsync from "./functionAsync.js";
import dayjs  from "./data.js";
 
    const adress1 = {
      street: "Av. Bresil",
      number: 20
    }
    const adress2 = {...adress1};
    adress2.number = 30;   
    
    console.log(adress1);
    console.log(adress2);

    let content = "Estudo na Rocketseat"
let result =content.slice(8, 20)

console.log(content);    
console.log(result)

for(let i=0; i<=3; i++){
  console.log(i);
  
}

console.log("Sum: " + calc.sum(3, 10));
console.log("Multiply: " + calc.multiply(4, 10));

funcAsync.fetch();
executOrder.ordemDeExecução();