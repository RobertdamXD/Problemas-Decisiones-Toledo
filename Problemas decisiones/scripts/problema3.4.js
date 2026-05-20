function operar(){
    let hora = parseInt(document.getElementById("hora").value);
    if (hora<=2){
        const result = hora * 5
        document.getElementById("result").textContent = "El Costo Es:" + result; 
    }   else if (hora>2 && hora<6){
        let segundo = hora - 2;
        const result = (segundo * 4) + 10;
        document.getElementById("result").textContent = "El Costo Es:" + result; 
    }   else if (hora>5 && hora<11){
        let tercero = hora - 5;
        const result = (tercero*3) + 22
       document.getElementById("result").textContent = "El Costo Es:" + result; 
    }   else {
        let cuarto = hora - 10;
        const result = (cuarto*2) + 37;
        document.getElementById("result").textContent = "El Costo Es:" + result; 
}
};