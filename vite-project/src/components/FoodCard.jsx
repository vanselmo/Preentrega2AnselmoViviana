import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function FoodCard({ meal }) {
    return (
        <div className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:scale-105 transition text-center">
            <img className='mb-4 grayscale-0.5 hover:grayscale-0' src={meal.thumbnail} alt={meal.name} />
            <h2 className='my-2 font-bold text-sm text-center'>{meal.name}</h2>
            <p className='text-center mb-2'>Precio: ${meal.price}</p>
            <div className='flex items-center justify-center gap-x-2'>
                <Link to={`/item/${meal.id}`}>
                    <Button>Ver más</Button>
                </Link>
                <Button className='text-green-500 font-bold'>Comprar</Button>
            </div>
        </div>
    );
}

export default FoodCard;
