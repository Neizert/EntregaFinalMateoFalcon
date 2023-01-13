import React,{useState,useEffect} from "react";
import ItemDetail from "../ItemDetail";
import redbull from "../../img/redbull.png"
import alfajor from "../../img/alfajor.png"
import doritos from "../../img/doritos.png"
import { useParams } from "react-router-dom";

const productos = [
    { id:1, image: redbull, title:"Redbull", category:"bebidas"},
    { id:2, image: alfajor, title:"Alfajor", category:"comestibles"},
    { id:3, image: doritos, title:"Doritos", category:"comestibles"}

];


const ItemDetailContainer = () => {
   const [data,setData] = useState({});
   const { detalleId} = useParams();
    
   useEffect(() =>{
    const getData= new Promise(resolve =>{
        setTimeout(() =>{
            resolve(productos);
        }, 3000);
    })
    getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));
   },[])

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;