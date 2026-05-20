function operar(){
    let pago = parseInt(document.getElementById("pago").value);
    let chamba = parseInt(document.getElementById("chamba").value);
    if (chamba<=40){
        const result = pago * chamba;
        document.getElementById("result").textContent = "Tu pago Es: " + result;
    }
    else {
        let extra = chamba - 40;
        const result = (pago * 40) + (extra * (pago*2));
        document.getElementById("result").textContent = "Tu Pago Es: " + result;
    }
};