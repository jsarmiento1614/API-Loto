var auth = require('../auth');
module.exports = (app, sql, sqlConfig) => {
    // Mensaje de Bienvenida
    app.get('/', (req, res) => {
        res.send('<h1>BIENVENIDO A LA LOTELSA</h1>')
    });

    //Post que Crea el Usuario

app.post("/v1/user/create",(req, res, next) =>{
        
    var user = req.body.user;
    var password = req.body.password;
    
    console.log(user+ password);
    
    if(!user &&  !password){
        res.send("error");
    }

    var q = `insert into dbo.Users(UserName, UserPassword) values ('${user}','${password}')`;
     
    new sql.ConnectionPool(sqlConfig).connect().then(pool => {
        return pool.query(q)
    })
    .then(result => {
        var data = {
            success: true,
            message: `Se ha registrado el usuario ${user} `
        }
        res.send(data);
    })
    .catch(err => {
        console.error(err);
    })
});

//Post que Loguea al Usuario y le devuelve un Token

app.post("/v1/user/login",(req, res, next)=>{
    var user = req.body.user;
    var password = req.body.password

    if(!user || !password){
        res.status(403).send({ message: "missing parameters"});
    }

    var q=  `select top 1 * from dbo.Users u where u.UserName = '${user}' and u.UserPassword = '${password}'`
    
    new sql.ConnectionPool(sqlConfig).connect().then(request => {
        return request.query(q);
    })
    .then(result => {

        if(result.recordset.length > 0)
        {
            res.send({ 
                    success: true, 
                    message: "",
                    token: auth.CreateToken(result.recordset.UserId),
                    user: result.recordset
                });
        } else {
            res.status(403).send({
                success: false,
                message:"Error de usuario o password"
            })
        }
    })
    .catch(err =>{
        return next(err);
    })
});

app.get("/v1/diaria/:fecha",(req,res)=>{
    let fecha = req.params.fecha;

    if(!fecha){
        res.send({message: 'Error parametro fecha no existe'});
    }

    var q=`select * from [dbo].[Diaria] where [fecha]=cast(${fecha} as smalldatetime)`;
    
    new sql.ConnectionPool(sqlConfig).connect().then(pool => {
        return pool.query(q)
    })
    .then(result => {
        var data = {
            success: true,
            message: `Se ha creado ${result.rowsAffected} registro nuevo`
        }
        res.send(data);
    })
    .catch(err => {
        console.error(err);
    });
});

}