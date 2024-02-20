import React from 'react';
import ShopItem from "./ShopItem";

const ListView = ({items}) => {
    return (
        <div className="flex flex-wrap justify-center">
            {items.map((product) => {
                const {name, price, color, img} = product;
                return <ShopItem name={name} price={price} color={color} img={img} key={img}/>
            })}
        </div>
    );
};

export default ListView;