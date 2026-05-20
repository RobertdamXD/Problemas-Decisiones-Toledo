function operar(){
    let dinero = parseInt(document.getElementById("dinero").value);
    if (dinero<=10){
        document.getElementById("result").textContent = "Puedes Comprar: Tarjeta"; 
    }   else if (dinero<=100){
        document.getElementById("result").textContent = "Puedes Comprar: Chocolates";
    }   else if (dinero<=250){
        document.getElementById("result").textContent = "Puedes Comprar: Flores";
    }   else {
        document.getElementById("result").textContent = "Puedes Comprar: Anillo";
}
};