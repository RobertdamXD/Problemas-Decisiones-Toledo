function operar(){

    let costoKm= parseFloat(document.getElementById("costoKm").value);
    let mexico= 750 * 2 * costoKm;
    let pv= 800 * 2 * costoKm;
    let acapulco= 1200 * 2 * costoKm;
    let cancun= 1800 * 2 * costoKm;

    let destino= "Mexico";

    if(pv < mexico && pv <= acapulco && pv <= cancun){
        destino= "Puerto Vallarta";
    }
    if(acapulco < mexico && acapulco < pv && acapulco <= cancun){
        destino= "Acapulco";
    }
    if(cancun < mexico && cancun < pv && cancun < acapulco){
        destino= "Cancun";
    }
    document.getElementById("result").innerHTML =
    "El destino más baato es: " + destino;
}