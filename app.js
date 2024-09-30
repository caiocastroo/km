let km, total;

function calcular() {
    // entrada
    km = Number(frmKm.inputKm.value);
    // processamento
    total = km * 1000;  
    // saída
    frmKm.inputMetros.value = total.toFixed(2);
}
