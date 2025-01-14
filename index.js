const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Servir archivos estáticos desde el directorio "media"
app.use('/media', express.static('media'));

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.render('home', { 
        titulo: 'Adopciones', 
        azulBase: 'blue lighten-3', 
        verdeBase: 'green lighten-3', 
        alertaRojo: 'red darken-4', 
        mensaje: 'Peluditos Buscando Familia',
        animales
    });
});

// Ruta para mostrar información de recaudación y animales
app.get('/recaudacion', (req, res) => {
    
    res.render('recaudacion', { 
        titulo: 'Adopciones', 
        animales, 
        azulBase: 'blue lighten-3', 
        verdeBase: 'green lighten-3', 
        alertaRojo: 'red darken-4' 
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


const animales = [
    { id: 1, name: "Bagira", edad: "2 años", talla: "mediana", description: "Ella se llama bagira, tiene dos años aproximadamente, es súper dócil con niños y adultos. Tiene muchísima energía por lo mismo que está joven. Se va en adopción con promesa de esterilización, ya que la usaban de monta.", foto: "/media/Bagira.jpg", contact: "5547827633" },
    { id: 2, name: "Daysi", edad: "7-8 meses", talla: "chica", description: "Daysi en adopción responsable. La pequeña Daysi busca hogar amoroso y responsable. Esterilizada, Tiene su primer vacuna, Desparacitada, Talla chica, Convive con perros y gatos.", foto: "/media/Daysi.jpg", contact: "5547827633" },
    { id: 3, name: "Kyra", edad: "1 año y medio", talla: "mediana", description: "Hembra, desparasitada, vacunada, esterilizada. Edad aprox 1 año y medio. Tamaño mediana-grande. Carácter Muy Inteligente, limpia, juguetona, alegre, amorosa, ideal para gente que le guste ir de paseo, correr, convive con otros perritos y perritas, niños, gatos", foto: "/media/Kyra.jpg", contact: "5547827633" },
    { id: 4, name: "Everest", edad: "7 meses", talla: "mediana", description: "Everest. Gigante de los Pirineos. 7 meses.", foto: "/media/Everest.jpg", contact: "5547827633" },
    { id: 5, name: "Moka", edad: "1 año", talla: "chica", description: "Perfecto para un hogar cálido.", foto: "/media/Moka.jpg", contact: "5547827633" },
    { id: 6, name: "Vaquita", edad: "3 meses", talla: "chica", description: "Muy juguetona, cariñosa y divertida", foto: "/media/Vaquita.jpg", contact: "5545594029" },
    { id: 7, name: "Kenai", edad: "5 años", talla: "grande", description: "Amigable y cariñoso con las personas, siempre dispuesto a recibir y dar cariño.", foto: "/media/Kenai.jpg", contact: "fb. Uriel Reyes" },
    { id: 8, name: "Miel", edad: "1 año", talla: "grande", description: "Perrita llena de energía,  amor y ternura para el hogar.", foto: "/media/Miel.jpg", contact: "5538379853" },
    { id: 9, name: "Flaca", edad: "1 año 6 meses", talla: "grande", description: "Esterilizada, vacunada ysana. Es super amorosa, noble y activa.", foto: "/media/Flaca.jpg", contact: "5582231495" },
    { id: 10, name: "Dexter", edad: "1 año", talla: "grande", description: "Es fiel protector y muy juguetónnn, es muy lindo perro.", foto: "/media/Dexter.jpg", contact: "fb. Cesar Antonio" },
    { id: 11, name: "Gatita", edad: "9 meses", talla: "chica", description: "Soy muy cariñosa, se usar el arenero, soy obediente y me gusta tomar el sol.", foto: "/media/Gatita.jpg", contact: "7221698720" }
];