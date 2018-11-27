# Loto

## Base de datos nombre (loto)

**Tabla de Users**
```
UserId
UserName   
UserPassword
TypeId
```

**Tabla de TypeGame**
```
TypeId
Fecha   
Pega3Id 
DiariaId
```
**Tabla de Diaria**
```
DiariaId
DiaNumero   
TipoId  
SimboloId
```
**Tabla de Simbolos**
```
SimboloId
SimboloNumero   
SimboloAnimal
```

**Tabla de Pega3**
```
Pega3Id 
Peg3N1
Peg3N2
Peg3N3
TypeId
```

# Convencion de nombres
```
 Post(localhost:8090/v1/user/create)
 Post(localhost:8090/v1/user/:id/create/loto)
 Post(localhost:8090/v1/user/:id/create/diaria)
 Get(localhost:8090/v1/diaria/:fecha)
 Get(localhost:8090/v1/loto/:fecha)
```

