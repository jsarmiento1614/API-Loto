# Loto
# Ejercicio Propuesto
La empresa lotelsa lo ha contratado para desarrollar el API del famoso juego de la Loto y la Diaria, tome en cuenta lo siguiente:
**El administrador puede crear juegos nuevos, tanto de Loto como de diaria.**
**El usuario puede consultar que juegos jugaron en una fecha en especifico.**
**Adicionalmente tome en cuanta que cada numero de la diara tiene asociado un Simbolo.**
* Diseñe el esquema relacional.

* Diseñe el API usando auth con tokens.

# Convencion de nombres API LOTELSA
```
 Post(localhost:8090/v1/user/create) |  Francisco
 POST (Localhost:8090/v1/user/login) |  Francisco

 Post(localhost:8090/v1/user/:id/create/loto)   |   James
 Post(localhost:8090/v1/user/:id/create/diaria) | James

 Get(localhost:8090/v1/diaria/:fecha)   | Jesús
 Get(localhost:8090/v1/loto/:fecha)  |  Jesús
```

## Base de datos nombre (loto)

**Tabla de Users**
```
UserId
UserName   
UserPassword

```

**Tabla de TypeGame**
```
TypeId
TypeName   

```
**Tabla de Pega3**
```
Pega3Id
Peg3Num1   
Peg3Num2  
Peg3Num3
fecha

```
**Tabla de Simbolos**
```
SimboloId
SimboloNumero   
Simbolo
```

**Tabla de Diaria**
```
DiariaId 
DiariaNum
fecha
TypeId

```

**Tabla de Game**
```
GameId 
UserId

```

