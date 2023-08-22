const formulario = document.querySelector('.formulario');
function enviar(){
    console.log(formulario.email);

    // let alquiler = {
    //     "cancha" : data.cancha.value,
    //     "date": data.day.value,
    //     "hour": data.horas.value,
    //     "user": "Jorge"
    // }
    // console.log(alquiler);
    // const options = {
    //     method: 'POST',
    //     body: JSON.stringify(alquiler),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // }
    // const url = 'http://127.0.0.1:3002/alquiler/alquilar';
    // fetch(url, options)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    return false;
}

enviar();