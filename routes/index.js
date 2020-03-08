var express = require('express');
var router = express.Router();

const request = require('request');
const soap = require('soap');

router.get('/consulta/:cep', function (req, res, next) {

  var receivedCep = req.params.cep;
  var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

  soap.createClient(url, (err, client) => {
    client.consultaCEP({ cep: receivedCep }, (err, result) => {
      if (err) return console.error(err);
      res.send(result);
    })
  });

});

module.exports = router;
