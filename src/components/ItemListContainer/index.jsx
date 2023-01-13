import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Title from "../Title"

import ItemList from "../ItemList";
import redbull from "../../img/redbull.png"
import alfajor from "../../img/alfajor.png"
import doritos from "../../img/doritos.png"

const productos = [
    { id:1, image: redbull, title:"Redbull", category:"bebidas"},
    { id:2, image: alfajor, title:"Alfajor", category:"comestibles"},
    { id:3, image: doritos, title:"Doritos", category:"comestibles"}

];


const ItemListContainer = () => {

    const [data,setData] = useState([]);

    const {categoryid} = useParams();
      
    useEffect(() =>{
        const getData = new Promise(resolver => {
            setTimeout(() => {
                 resolver(productos);
            }, 1500)
        });
        if (categoryid){
            getData.then(res => setData(res.filter(producto => producto.category === categoryid)));
        }else{
            getData.then(res => setData(res));
        }
        
    },[categoryid])
 
    

    return (
        <div>
        <Title saludo="Bienvenido a mi página"/>
        
        <ItemList data ={data}/>
        </div>
    );
};

export default ItemListContainer;