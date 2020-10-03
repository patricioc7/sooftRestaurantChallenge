# Sooft Restaurant Challenge

Requiere NodeJs v14.7.0 y Yarn
## Quick start
#### Para instalar dependencias
```javascript
yarn
```

#### Para levantar
```javascript
yarn start
```

#### Endpoints

Crear un restaurante:
POST -> /restaurants

Body:
```javascript
{
"name" : "restaurante1",
"kindOfRestaurant": "arabe",
"songs": ["Paradise City","La ciudad de la furia","Bohemian Rhapsody"]

}
```
Traer todos los restaurantes y filtralos por tipo:
GET -> /restaurants/?kindOfRestaurant=arabe

Traer restaurante por nombre
GET -> /restaurants/restaurante1

