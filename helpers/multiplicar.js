const fs = require('fs');
const colors = require('colors')

//Fer wae
const crearArchivo = async (base = 5, listar = false, hasta = 10) =>{

    try {
        let salida = '';
        salida +='=================================\n';
        salida +=`           Tabla del ${base}           \n`;
        salida +='=================================\n';
    
        for (let index = 1; index <= hasta; index++) {
            salida +=`            ${base} x ${index} = ${base * index } \n`;
        }
        fs.writeFileSync( `salida/tabla-${base}.txt`, salida)
        if(listar)
            console.log(colors.rainbow( salida ));
        
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error
    }

}


// ma way
// const crearArchivo = (base = 5) =>{

//     return new Promise((resolve, err)=>{
//         try {
//             let salida = '';
//             salida +='=================================\n';
//             salida +=`           Tabla del ${base}           \n`;
//             salida +='=================================\n';
        
//             for (let index = 1; index <= 10; index++) {
//                 salida +=`            ${base} x ${index} = ${base * index } \n`;
//             }
//             fs.writeFileSync( `tabla-${base}.txt`, salida)
//             console.log(salida);
//             resolve(`tabla-${base}.txt`);
//         } catch (error) {
//             err(error);
//         }


//     });

// }

module.exports = {crearArchivo};