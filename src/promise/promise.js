
import { DiVim } from "react-icons/di";
import card from "../assets/bandeja-ceramica-colores.jpg"


const productos = [


    {
        id: "1",
        title: "Bandeja",
        text: "Alabad",
        price: 20,
        img: card,
        stock: 5,
        category: "bandejas",
    },
    {
        id: "2",
        title: "Bandeja",
        text: "Alabad",
        price: 20,
        img: card,
        stock: 5,
        category: "platos",
    },
    {
        id: "3",
        title: "Bandeja",
        text: "Alabad",
        price: 20,
        img: card,
        stock: 5,
        category: "vasos",
    },
    {
        id: "4",
        title: "Bandeja",
        text: "Alabad",
        price: 20,
        img: card,
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