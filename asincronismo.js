const traerDatos = () =>{
    return new Promise((resolve, reject) =>{
        console.log("Trayendo datos...");
        setTimeout(() => {
            resolve("datos cargados");
        }, 2000);
    })
}

const procesandoDatos = async() =>{
    try {
        const data = await traerDatos();
        console.log(data);
        console.log("procesando otra vez");
    } catch (error) {
        console.log(error);
    }
}

procesandoDatos();