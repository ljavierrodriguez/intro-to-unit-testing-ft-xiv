### Iniciar un proyecto 

    $ npm init -y

### Instalar JestJS en nuestro proyecto 

    $ npm install jest --save-dev
    $ npm install jest@27.4.7 --save-dev

### Modificar nuestro package.json y añadir lo siguiente:

"scripts": {
    ...
    "test": "jest"
    ...
},

### Modifcar nuestro package.json para activar el modo escuchador

"scripts": {
    ...
    "test": "jest --watch"
    ...
},

### Ejecutar las pruebas unitarias

    $ npm run test
