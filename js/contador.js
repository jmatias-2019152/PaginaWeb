const cuentaRegresiva = new Date("Dec 7, 2024 00:00:00").getTime();

const actualizarContador = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = cuentaRegresiva - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if (distancia < 0) {
        clearInterval(actualizarContador);
        document.querySelector(".contador").innerHTML = "¡Evento finalizado!";
    }
}, 1000);
