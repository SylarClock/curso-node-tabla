

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');



// console.log(process.argv);//no se haga asi
// const [ , ,arg3='base=5'] =process.argv;
// const[, base = 5] = arg3.split('=')

console.log('argv: ', argv);

const {b, l, h} = argv;
//const base = 10;

crearArchivo(b, l, h).then(resp =>{
    console.log(resp.bgCyan.black, ' creado!! :)'.bgGreen.yellow);
}).catch( console.log );


