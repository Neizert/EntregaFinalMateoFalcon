import "./itemDetail.css";
import ItemCount from "../ItemCount";
import React, { useState} from "react";
import { NavLink } from "react-router-dom";

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return(
        <div className="container">
            <div className="detail">
                <img  className="detail__image" src={data.image} alt="" />
            </div>
            <div className="content">
              <h1>{data.title}</h1>
              {
                goToCart
                ? <NavLink to='/cart'>Terminar compra </NavLink>
                : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
              }
            </div>
        </div>
    )
}

export default ItemDetail;