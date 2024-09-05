const express = require('express');
const path = require('path');

const startServer = (options) => {
        const { port, public_path = 'public' } = options;
        //console.log(port);
        //console.log(public_path);

        const app = express();
        // Para poder usar middlewares se usa la palabra use
        app.use(express.static(public_path)); // contenido estático que ponemos disponible

        // esta forma funciona para una Single Page Application
        app.get('*', (req, res) => {
                const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
                res.sendFile(indexPath);
        });

        app.listen(port, () => {
                console.log(`Servidor corriendo en el puerto ${port}`);
        });
}

module.exports = { startServer }