
import { DiVim } from "react-icons/di";
import card from "../assets/bandeja-ceramica-colores.jpg";
import card2 from "../assets/bandejas-de-colores-ceramica.jpg";
import card3 from "../assets/platos-colores-ceramica.jpg";
import card4 from "../assets/casi-perfecto-mugs.jpeg";


function getProducts (){
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 1000)
})
}

export default getProducts;