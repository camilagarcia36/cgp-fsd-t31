window.onload = function() {
    fechaUpdate();
};

function fechaUpdate() {
    var fecha = new Date(Date.now());

    document.getElementById("h").innerText = (fecha.getHours());
    document.getElementById("m").innerText = (fecha.getMinutes());
    document.getElementById("s").innerText = (fecha.getSeconds());

    setTimeout(fechaUpdate, 1000);
}