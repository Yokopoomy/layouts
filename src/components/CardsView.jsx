import React from 'react';
import ShopCard from "./ShopCard";

const CardsView = ({cards}) => {
    return (
        <div className="flex flex-wrap justify-center">
            {cards.map((product) => {
                const {name, price, color, img} = product;
                return <ShopCard name={name} price={price} color={color} img={img} key={img}/>
            })}
        </div>
    );
};

export default CardsView;