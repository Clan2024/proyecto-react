
import { DiVim } from "react-icons/di";
import card from "../assets/bandeja-ceramica-colores.jpg";
import card2 from "../assets/bandejas-de-colores-ceramica.jpg";
import card3 from "../assets/platos-colores-ceramica.jpg";
import card4 from "../assets/casi-perfecto-mugs.jpeg";




const productos = [


    {
        id: "1",
        title: "Bandeja Max",
        text: "Una pieza imponente y colorida, ideal para servir o decorar.",
        price: 20,
        img: card,
        stock: 5,
        category: "bandejas",
    },
    {
        id: "2",
        title: "Plato",
        text: "Platos de cerámica pintados a mano con patrones florales y abstractos.",
        price: 20,
        img: card3,
        stock: 5,
        category: "platos",
    },
    {
        id: "3",
        title: "Vaso",
        text: "Vasos de cerámica ilustrados a mano con motivos alegres",
        price: 20,
        img: card4,
        stock: 5,
        category: "vasos",
    },
    {
        id: "4",
        title: "Bandeja Mini",
        text: "Pequeñas bandejas de cerámica decoradas con delicados diseños.",
        price: 20,
        img: card2,
        stock: 5,
        category: "bandejas",
    }

]

function getProducts (){
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 1000)
})
}

export default getProducts;