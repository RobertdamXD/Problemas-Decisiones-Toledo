function operar(){

    let sueldo= parseFloat(document.getElementById("sueldo").value);
    let antiguedad= parseFloat(document.getElementById("antiguedad").value);
    let bonoAnt= 0;
    let bonoSue= 0;

    if(antiguedad>2 && antiguedad<5){
        bonoAnt= sueldo * 0.2;
    } else if(antiguedad>=5){
        bonoAnt= sueldo * 0.3;
    }
    if(sueldo<1000){
        bonoSue= sueldo * 0.25;
    } else if(sueldo<=3500){
        bonoSue= sueldo * 0.15;
    } else{
        bonoSue= sueldo * 0.1;
    }
    let bono= bonoAnt > bonoSue ? bonoAnt : bonoSue;
    document.getElementById("result").innerHTML =
    "Bono asignado: $" + bono;
}