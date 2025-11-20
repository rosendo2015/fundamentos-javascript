export default dayjs;
const dataHoraElemento = document.querySelector('.data-hora');
console.log("TRABALHANDO COM DATAS");



setInterval(() => {
    let date = dayjs().format("DD/MM/YYYY HH:mm:ss");    
    dataHoraElemento.textContent = date;    
}, 1000);

