fecha = location.href.split('?')[1];

fetch("http://127.0.0.1:3002/alquiler/buscar?fecha="+ new Date(fecha))
.then(function(respuesta){
    return respuesta.json();
})
.then(function(informacion){
    console.log(informacion);
    let canchas = document.getElementById("listado-canchas");
    if (informacion.length){ 
    informacion.forEach(cancha => {
        let div = document.createElement('div');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        let para3 = document.createElement('p');
        let para4 = document.createElement('p');
        para1.innerHTML = 'Cancha: '+cancha.cancha;
        para2.innerHTML = 'Fecha: '+cancha.date;
        para3.innerHTML = 'Hora: '+cancha.hour;
        para4.innerHTML = 'Usuario: '+cancha.user;

        div.appendChild(para1);
        div.appendChild(para2);
        div.appendChild(para3);
        div.appendChild(para4);

        canchas.appendChild(div);
    })} else { 
        let div = document.createElement('div');
        let para1 = document.createElement('p');
        para1.innerHTML = 'No hay canchas alquiladas para este dia!';
        div.appendChild(para1);
        canchas.appendChild(div);


    }
})
.catch(function(error){
    console.log('Tenemos Problemas: '+ error);
})