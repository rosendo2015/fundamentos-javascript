/*fundamentos javascript*/
import * as calc from "./fundamentos.js";
import * as executOrder from "./ordemDeExecução.js";
   
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

for(let i=0; i<=10; i++){
  console.log(i);
  
}

console.log("Sum: " + calc.sum(3, 10));
console.log("Multiply: " + calc.multiply(4, 10));

setTimeout(()=>{
  console.log("Olá, Rosendo....");  
},3000)

let value = 10;

const interval = setInterval(() => {
  value--;
  console.log(value);
  if(value === 0){
    clearInterval(interval);
    console.log("Fim!");
  }
}, 500);


function asyncFunction(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = false;
      if(isSuccess){
        resolve("Async Function Resolved");
      } else {
        reject("Async Function Rejected");
      }
    }, 6000);
  });
}
asyncFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Async operation completed"));

async function fetch(){
  try{
    const response = await asyncFunction();
    console.log(response);
  } catch(error){
    console.log(error);
  } finally{
    console.log("Fetch operation completed");
  }
}
fetch();