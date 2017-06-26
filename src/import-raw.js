var request = require('request-json'),
    fs = require('fs');

var client = request.createClient('http://ddd.pricez.com.br/');

client.get('/estados').then(result => {

  const estados = result.body.payload;

  const promises = estados.map(estado => {
    return new Promise(resolve => {
      client.get(`/estados/${estado}`).then(result => {
        resolve(result.body.payload);
      });
    });
  });

  Promise.all(promises).then( estado => {
    const jsons = [];
    estado.forEach(cidades => {
      cidades.forEach(cidade => {
        jsons.push(cidade);
      });
    });

    fs.writeFile("resources/ddd-raw.json", JSON.stringify(jsons, null, 2));
  });
});
