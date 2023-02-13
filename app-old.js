const http = require('http');

// Establecemos la conexion al server
http.createServer((request, response) => {

    // Cabecero, podemos pasar STATUS
    // En los headers podemos pasar tokens
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, {'Content-Type': 'application/csv'});    



    response.write('Hola mundo');
    // response.write('1; Mauro\n');
    // response.write('2; Julian\n');
    response.end();
})
.listen( 8080 );

console.log("Escuchando el puerto 8080");