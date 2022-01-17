const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000
const app = express();

// const actividadesModule = require('./utils/actividades');

const viewsURL = path.join(__dirname, 'views');

app.set('views', viewsURL);
app.set('view engine', 'ejs');

const publicURL = path.join(__dirname, 'public');

app.use(express.static(publicURL));
const administradorContent ="Administrador";
const destinosContent ="Destinos";
const resumenContent ="Resumen";
const buenosairesContent ="Buenos Aires";
const noroesteContent ="Noroeste";
const litoralContent ="Litoral";
const cuyoContent ="Cuyo";
const cordobaContent ="Còrdoba";
const patagoniaContent ="Patagonia";


app.get('', (req, res) =>{
    res.render('./pages/pagina-principal')

});

app.get('/administrador', (req, res) => {

    res.render('./pages/administrador', {aboutStartingText: administradorContent});
    
});

app.get('/destinos', (req, res) =>{
    res.render('./pages/destinos', {aboutStartingText: buenosairesContent});
})

app.get('/buenosaires', (req, res) =>{
    res.render('./pages/buenosaires', {aboutStartingText: buenosairesContent});
})
app.get('/cordoba', (req, res) =>{
    res.render('./pages/cordoba', {aboutStartingText: cordobaContent});
})
app.get('/cuyo', (req, res) =>{
    res.render('./pages/destinos', {aboutStartingText: cuyoContent});
})
app.get('/litoral', (req, res) =>{
    res.render('./pages/litoral', {aboutStartingText: litoralContent});
})
app.get('/noereste', (req, res) =>{
    res.render('./pages/noroeste', {aboutStartingText: noroesteContent});
})
app.get('/patagonia', (req, res) =>{
    res.render('./pages/patagonia', {aboutStartingText: patagoniaContent});
})

// // Custom Modules
// const ModalActividadModule = require('./utils/products');

// app.get('', (req, res) => {
//     productsModule.getAllProducts((err, products) => {
//         if (err) return res.status(500).send('Some error ocurred');
//         if(products.length === 0) return res.status(500).send('Some Error Ocurred');
//         console.log(products);
//         const parsedProducts = JSON.parse(products);
//         return res.render('pages/index', {products: parsedProducts});
//     });
// });

// app.get('/product/:id', (req, res) => {
//     const {id} = req.params;
//     console.log(id);
//     productsModule.getSingleProduct(id, (err, product) => {
//         if (err) return res.status(404).send('Some error ocurred');
//         const parsedProduct = JSON.parse(product);
//         return res.render('pages/product', {product: parsedProduct});
//     });
// });



app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})