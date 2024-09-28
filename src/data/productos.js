const productos = [
    {
        id: "001924",
        nombre: "Camiseta de Universitario 2024",
        categoria: "ropa",
        precio: 80,
        imagen: "../public/camiseta-u.jfif",
        genero: "hombre"
    },
    {
        id: "001945",
        nombre: "Short Nike Sportwear",
        categoria: "ropa",
        precio: 40,
        imagen: "../public/short-nike.jfif",
        genero: "hombre"
    },
    {
        id: "002023",
        nombre: "Zapatilla Adidas Predator",
        categoria: "calzado",
        precio: 100,
        imagen: "../public/zapatilla-predator.jpg",
        genero: "hombre"
    },
    {
        id: "001999",
        nombre: "Pelota Eurocopa 2024",
        categoria: "accesorios",
        precio: 20,
        imagen: "../public/pelota-euro.jfif",
        genero: "ambos"
    },
    {
        id: "002024",
        nombre: "Gafas de natación Arena",
        categoria: "accesorios",
        precio: 40,
        imagen: "../public/gafa-arena.jpg",
        genero: "ambos"
    },
    {
        id: "002045",
        nombre: "Gafas de natación Winner",
        categoria: "accesorios",
        precio: 10,
        imagen: "../public/gafa-winner.jpg",
        genero: "ambos"
    },
    {
        id: "002019",
        nombre: "Medias antideslizantes",
        categoria: "ropa",
        precio: 10,
        imagen: "../public/media-anti.jpg",
        genero: "ambos"
    },
    {
        id: "002015",
        nombre: "Mangas de compresión",
        categoria: "ropa",
        precio: 30,
        imagen: "../public/polo-compr.jfif",
        genero: "hombre"
    },
    {
        id: "002014",
        nombre: "Montura deportiva",
        categoria: "accesorios",
        precio: 60,
        imagen: "../public/lente-fut.avif",
        genero: "ambos"
    },
    {
        id: "001969",
        nombre: "Leggins Adidas",
        categoria: "ropa",
        precio: 80,
        imagen: "../public/leggins.jpg",
        genero: "mujer"
    },
    {
        id: "002000",
        nombre: "Giannis Immortality 3",
        categoria: "calzado",
        precio: 80,
        imagen: "../public/giannis.jfif",
        genero: "ambos"
    },
    {
        id: "001000",
        nombre: "Pelota para pilates",
        categoria: "accesorios",
        precio: 20,
        imagen: "../public/pelota-pilates.jpg",
        genero: "mujer"
    },
    {
        id: "001040",
        nombre: "Top deportivo Adidas",
        categoria: "ropa",
        precio: 40,
        imagen: "../public/top-deportivo.jpg",
        genero: "mujer"
    },
    {
        id: "001060",
        nombre: "Traje de baño para mujer",
        categoria: "ropa",
        precio: 30,
        imagen: "../public/traje-mujer.jpg",
        genero: "mujer"
    },
    {
        id: "002020",
        nombre: "Set de pesas",
        categoria: "accesorios",
        precio: 60,
        imagen: "../public/pesas.jpg",
        genero: "ambos"
    },
    {
        id: "002525",
        nombre: "Maletín deportivo para hombres",
        categoria: "accesorios",
        precio: 70,
        imagen: "../public/maleta-hombre.avif",
        genero: "hombre"
    },
    {
        id: "002424",
        nombre: "Maletín deportivo para mujeres",
        categoria: "accesorios",
        precio: 70,
        imagen: "../public/maleta-mujer.jpg",
        genero: "mujer"
    },
    {
        id: "009090",
        nombre: "Falda de tenis",
        categoria: "ropa",
        precio: 40,
        imagen: "../public/falda-tenis.avif",
        genero: "mujer"
    },
    {
        id: "001515",
        nombre: "Raqueta de tenis Wilson",
        categoria: "accesorios",
        precio: 100,
        imagen: "../public/raqueta-wilson.jfif",
        genero: "ambos"
    },
    {
        id: "001234",
        nombre: "Vincha Adidas",
        categoria: "accesorios",
        precio: 10,
        imagen: "../public/vincha.avif",
        genero: "ambos"
    },
    {
        id: "001235",
        nombre: "Paquete de pelotas Wilson",
        categoria: "accesorios",
        precio: 20,
        imagen: "../public/pelotas-tenis.jpg",
        genero: "ambos"
    },
    {
        id: "000808",
        nombre: "Zapatilla Runner ASICS Mujer",
        categoria: "calzado",
        precio: 120,
        imagen: "../public/run-mujer.jpg",
        genero: "mujer"
    },
    {
        id: "006565",
        nombre: "Adidas Ultraboost Hombre",
        categoria: "calzado",
        precio: 120,
        imagen: "../public/adidas-ultraboost.avif",
        genero: "hombre"
    },
    {
        id: "000809",
        nombre: "Balon de voley Mikasa",
        categoria: "accesorio",
        precio: 100,
        imagen: "../public/balon-mikasa.jpg",
        genero: "ambos"
    },
    {
        id: "000810",
        nombre: "Cinta de vendaje",
        categoria: "accesorio",
        precio: 10,
        imagen: "../public/cinta-vendaje.jfif",
        genero: "ambos"
    },
    {
        id: "000811",
        nombre: "Rodilleras para voley",
        categoria: "accesorio",
        precio: 10,
        imagen: "../public/rodilleras.avif",
        genero: "ambos"
    },
    {
        id: "000812",
        nombre: "Camiseta Alemania 1990",
        categoria: "ropa",
        precio: 50,
        imagen: "../public/alemania90.jpeg",
        genero: "hombre"
    },
    {
        id: "000813",
        nombre: "Pelota de basket Wilson",
        categoria: "accesorio",
        precio: 80,
        imagen: "../public/pelota-basket.jpg",
        genero: "ambos"
    },
    {
        id: "000814",
        nombre: "Short deportivo para mujer",
        categoria: "ropa",
        precio: 30,
        imagen: "../public/short-mujer.avif",
        genero: "mujer"
    },
    {
        id: "000815",
        nombre: "Tomatodo para mujer",
        categoria: "accesorio",
        precio: 20,
        imagen: "../public/tomatodo-mujer.avif",
        genero: "mujer"
    }
]

const getProductos = new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 3000)
})

export default getProductos