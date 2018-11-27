module.exports = (app, sql, sqlconfig) => {
    // Mensaje de Bienvenida
    app.get('/', (req, res) => {
        res.send('<h1>BIENVENIDO A LA LOTELSA</h1>')
    });

}