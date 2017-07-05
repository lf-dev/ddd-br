var fs = require('fs');

const ddds = JSON.parse(fs.readFileSync('resources/ddd-raw.json'));

const estados = ddds.reduce((_estados, registro) => {
  _estados.add(registro.estado);
  return _estados;
}, new Set());


const dddPorEstado = {};
estados.forEach( estado => {

  dddPorEstado[estado] = {};

  ddds.filter( registro => {
    return registro.estado == estado;
  }).forEach( registro => {
    dddPorEstado[estado][registro.cidade] = registro.ddd;
  });
});

fs.writeFile('resources/ddd-estado.json', JSON.stringify(dddPorEstado, null, 2));
