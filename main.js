function get(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET","http://localhost:3000/alumnos");

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = () =>{


        let datos = xhr.response;
        
        datos.forEach(dato => {
            console.log(dato);
        });
    };
}

function getID(){

    let xhr = new XMLHttpRequest();

    let id = prompt("Introduce la id a busar");

    let url = "http://localhost:3000/alumnos/" + id;

    xhr.open("GET", url);

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = () =>{
        if(xhr.status == 200){
            console.log(xhr.response);
        }else{
            error(xhr);
        }
    };
    
}

function POST(){
    let xhr = new XMLHttpRequest();

    xhr.open("POST","http://localhost:3000/alumnos");
    xhr.setRequestHeader('content-type', 'application/json; charset=utf-8')


    let nuevoAlum = {
        "nombre" : prompt("introduzca su nombre"),
        "edad" : prompt("introduzca su edad")
    }

    nuevoAlum = JSON.stringify(nuevoAlum);

    xhr.responseType = "json";

    xhr.send(nuevoAlum);

    xhr.onload = () =>{

        if(xhr.status == 201){
            
            console.log("Insertado correctamente");
            console.log(xhr.response);
        }else{
            error(xhr);
        }
        
    };
}

function PUT(){

    let xhr = new XMLHttpRequest();

    let id = prompt("introduzca el id a cambiar");

    xhr.open("PUT","http://localhost:3000/alumnos/" + id);
    xhr.setRequestHeader('content-type', 'application/json; charset=utf-8')

    let nuevoAlum = {
        "id" : id,
        "nombre" : prompt("introduzca su nombre"),
        "edad" : prompt("introduzca su edad")
    }

    nuevoAlum = JSON.stringify(nuevoAlum);

    xhr.responseType = "json";

    xhr.send(nuevoAlum);

    xhr.onload = () =>{

        if(xhr.status == 200){
            
            console.log("Cambiado correctamente");
            console.log(xhr.response);
        }else{
            error(xhr);
        }
        
    };

}

function PATCH(){

    let xhr = new XMLHttpRequest();

    let id = prompt("introduzca el id a cambiar");

    xhr.open("PATCH","http://localhost:3000/alumnos/" + id);
    xhr.setRequestHeader('content-type', 'application/json; charset=utf-8')

    let nuevoAlum = {
        "nombre" : prompt("introduzca su nombre")
    }

    nuevoAlum = JSON.stringify(nuevoAlum);

    xhr.responseType = "json";

    xhr.send(nuevoAlum);

    xhr.onload = () =>{

        if(xhr.status == 200){
            
            console.log("Cambiado correctamente");
            console.log(xhr.response);
        }else{
            error(xhr);
        }
        
    };

}

function error(xhr){
    console.log("ERROR en el envio de datos: " + xhr.status + " " + xhr.statusText);
}