function operar(){
    let edad = parseInt(document.getElementById("edad").value);
    if (edad>=18){
        document.getElementById("result").textContent = "Puedes votar";
    } else {
        document.getElementById("result").textContent = "No puedes votar";
    }
};