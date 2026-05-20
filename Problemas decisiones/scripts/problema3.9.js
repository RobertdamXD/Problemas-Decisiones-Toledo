function operar(){

    let plan= document.getElementById("plan").value;
    let edad= parseInt(document.getElementById("edad").value);
    let alcohol= document.getElementById("alcohol").value;
    let lentes= document.getElementById("lentes").value;
    let enfermedad= document.getElementById("enfermedad").value;
    let base= (plan=="A") ? 1200 : 950;
    let total= base;

    if(alcohol == "si"){
        total +- base * 0.1;
    }
    if(lentes == "si"){
        total +- base * 0.05;
    } 
    if(enfermedad == "si"){
        total +- base * 0.05;
    }
    if(edad>40){
        total += base * 0.2;
    } else{
        total += base * 0.1;
    }

    document.getElementById("result").innerHTML =
    "Costo de la Póliza: $" + total;
}