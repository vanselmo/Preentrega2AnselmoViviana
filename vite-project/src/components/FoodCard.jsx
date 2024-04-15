import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';


function FoodCard({ meal }) {
    
    console.log(meal);
    return (
        <div className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:scale-105 transition">
            <img className='mb-4 grayscale-0.5 hover:grayscale-0' src={meal.image} alt="card-image" />
            <h2 className='my-2 font-bold text-sm text-center'>{meal.label}</h2>
            <p className='text-center mb-2'>Precio: ${Math.floor(Math.random() * 20) + 5}</p>
            <div className='flex items-center justify-center gap-x-2'>
                <Link to={`/item/${meal.foodId}`}>
                    <Button>Ver más</Button>
                </Link>
                <Button className='text-green-500 font-bold'>Comprar</Button>
            </div>
        </div>
    );
}

export default FoodCard;
