const traerDatos = () =>{
    return new Promise((resolve, reject) =>{
        console.log("trayendo datos...");
        setTimeout(() => {
            resolve("datos cargados!");
        }, 2000);
    })
}

const procesandoDatos = async() =>{
    try {
        const data = await traerDatos();
        console.log(data);
        console.log("prueba 2");
    } catch (error) {
        console.log(error);
    }
}

procesandoDatos();