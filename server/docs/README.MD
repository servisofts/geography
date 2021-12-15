# `pais`
#### `getAll`
- Request
```json
{
    "component":"pais",
    "type":"getAll",
    "estado":"cargando"
}
```
- Response
```json
{
    "component": "pais",
    "estado": "exito",
    "type": "getAll",
    "data": {
        "1a": {
            "estado": 1,
            "key_usuario": null,
            "dial_code": "591",
            "fecha_on": "2021-12-14T22:38:50.687722",
            "postal_code": "591",
            "nombre": "Bolivia",
            "key": "1a",
            "acronimo": "BO"
        },
        "d2f786f7-f8c9-4636-a508-eeb706170040": {
            "estado": 1,
            "key_usuario": null,
            "dial_code": "592",
            "fecha_on": "2021-12-14T23:03:32.954208",
            "postal_code": "592",
            "nombre": "Colombia",
            "key": "d2f786f7-f8c9-4636-a508-eeb706170040",
            "acronimo": "CO"
        }
    },
}
```

#### `registro`
- Request
```json
{
    "component": "pais",
    "type": "registro",
    "estado": "cargando",
    "data": {
        "nombre": "Colombia",
        "acronimo": "CO",
        "dial_code": "592",
        "postal_code": ""
    }
}
```
- Response
```json
{
    "component": "pais",
    "estado": "exito",
    "type": "registro",
    "data": {
        "estado": 1,
        "dial_code": "592",
        "fecha_on": "now()",
        "postal_code": "592",
        "nombre": "Colombia",
        "key": "d2f786f7-f8c9-4636-a508-eeb706170040",
        "acronimo": "CO"
    },
}
```
