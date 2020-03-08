# Get Address - API

This sample uses the Correios webservice so we can get the complete address using the CEP.
<br>
Development based in my friend's post (PT-BR) [Como consumir o webservice dos correios.](https://medium.com/@jeanneumann290/como-consumir-o-web-service-dos-correios-utilizando-nodejs-a7a0fb796294)

## Built With

* [NodeJS](https://nodejs.org/en/) - Plus modules (Express, Soap, Request and Nodemon)
* [Postman](https://www.postman.com) - Just for testing
* [WSDL from Correios](https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl) - This file contains the methods we'll use.

## Using It

**Example of consult:**
``` 
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
```
**Example of return:**
```
{
    "return": {
        "bairro": "...",
        "cep": "...",
        "cidade": "...",
        "complemento2": "...",
        "end": "...",
        "uf": "..."
    }
}
```


