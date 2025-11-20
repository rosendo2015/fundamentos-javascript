setTimeout(()=>{
  console.log("Olá, Rosendo....");  
},2000)

let value = 3;

const interval = setInterval(() => {
  value--;
  console.log(value);
  if(value === 0){
    clearInterval(interval);
    console.log("Fim!");
  }
}, 1000);


function asyncFunction(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = false;
      if(isSuccess){
        resolve("Async Function Resolved");
      } else {
        reject("Async Function Rejected");
      }
    }, 3000);
  });
}
asyncFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Async operation completed"));

export async function fetch(){
  try{
    const response = await asyncFunction();
    console.log(response);
  } catch(error){
    console.log(error);
  } finally{
    console.log("Fetch operation completed");
  }
}