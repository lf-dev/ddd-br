var fs = require('fs');

const ddds = JSON.parse(fs.readFileSync('resources/ddd-raw.json'));

const es = ddds.reduce((estados, cidade) => {
  estados.add(cidade.estado);
  return estados;
}, new Set());


const dddPorEstado = {};
es.forEach( estado => {

  dddPorEstado[estado] = {};

  ddds.filter( ddd => {
    return ddd.estado == estado;
  }).forEach( ddd => {
    dddPorEstado[estado][ddd.cidade] = ddd.ddd;
  });
});

fs.writeFile('resources/ddd-estado.json', JSON.stringify(dddPorEstado, null, 2));
