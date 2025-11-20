export function ordemDeExecução(){
    console.log(1);

    setTimeout(() => console.log(2), 0);

    queueMicrotask(() => console.log(3));

    Promise.resolve().then(() => console.log(4));
    
    console.log(5);

}
