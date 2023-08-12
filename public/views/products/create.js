fetch("http://127.0.0.1:3002/productos/listar")
.then(function(respuesta){
    return respuesta.json();
})
.then(function(informacion){
    console.log(informacion);
    let canchas = document.getElementById("cancha");
    informacion.forEach(cancha => {
        let opt = document.createElement("option");
        opt.value = cancha._id;
        opt.innerHTML = cancha.name;
        canchas.appendChild(opt);

    });
})
.catch(function(error){
    console.log('Tenemos Problemas: '+ error);
})


function enviar(data){
    console.log(data.cancha.value);
    let alquiler = {
        "cancha" : data.cancha.value,
        "date": data.day.value,
        "hour": data.horas.value,
        "user": "Jorge"
    }
    console.log(alquiler);
    const options = {
        method: 'POST',
        body: JSON.stringify(alquiler)
    }
    const url = 'http://127.0.0.1:3002/productos/alquilar';
    fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    return false;
}




