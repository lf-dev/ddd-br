var fs = require('fs');

const ddds = JSON.parse(fs.readFileSync('resources/ddd-raw.json'));

const es = ddds.reduce((estados, cidade) => {
  estados.add(cidade.estado);
  return estados;
}, new Set());

console.log(es);
