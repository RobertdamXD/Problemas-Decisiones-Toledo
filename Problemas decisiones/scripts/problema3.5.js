function operar(){

    let n1 = document.getElementById("n1").value;
    let e1 = parseInt(document.getElementById("e1").value);
    let n2 = document.getElementById("n1").value;
    let e2 = parseInt(document.getElementById("e2").value);
    let n3 = document.getElementById("n1").value;
    let e3 = parseInt(document.getElementById("e3").value);

    let nombre=n1;
    let edad=e1;

    if(e2<edad){
        nombre=n2;
        edad=e2;
    }
    if(e3<edad){
        nombre=n3;
        edad=e3;
    }
    document.getElementById("result").innerHTML =
    "La Persona Menor Es:" + nombre + "con" + edad + "años";
}