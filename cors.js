module.exports = (app)=>{
    app.all('/*', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
        );
        next();
    });
}