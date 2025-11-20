 let valors = [10, 20, 30];

    //map
   const valorsMap = valors.map((valor) => {      
       return console.log("Map: " + valor);      
    });
    //filter
    const valorsFilter = valors.filter((valor) => {
      return valor > 20;      
    });
    console.log("Filter: " + valorsFilter);
    //reduce  
    const valorsReduce = valors.reduce((acumulador, valor) => {
      return acumulador + valor;      
    }, 0);
    console.log("Reduce: " + valorsReduce);
    //find
    const valorsFind = valors.find((valor) => {
      return valor < 30;
    });
    console.log("Find: " + valorsFind);
    //findIndex
    const valorsFindIndex = valors.findIndex((valor) => {
      return valor > 20;
    });
    console.log("FindIndex: " + valorsFindIndex);
    //some
    const valorsSome = valors.some((valor) => {
      return valor < 10;
    }); 
    console.log("Some: " + valorsSome);
    //every
    const valorsEvery = valors.every((valor) => {
      return valor > 5;
    });
    console.log("Every: " + valorsEvery); 
    //sort
    const valorsSort = valors.sort((a, b) => {
      return a - b;
    });
    console.log("Sort: " + valorsSort);
    //forEach
    valors.forEach((valor) => {
      console.log("forEach: " + valor);
    });
    //includes
    const valorsIncludes = valors.includes(25);
    console.log("Includes 25: " + valorsIncludes);
    //join
    const valorsJoin = valors.join(" - ");
    console.log("Join: " + valorsJoin); 

    function sum(a,b){
        return a+b;
    }
    function multiply(a,b){
        return a*b;
    }

    export {sum, multiply};
