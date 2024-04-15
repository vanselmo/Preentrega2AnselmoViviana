import { Button } from 'antd';
import React from 'react';

function RecipeCardContainer({ recipe }) {
    const { label, image, url } = recipe;

    return (
        <div className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:scale-105 transition">
            <img className='mb-4 grayscale hover:grayscale-0' src={image} alt={label} />
            <h2 className='my-2 font-bold text-sm text-center'>{label}</h2>
            <div className='flex items-center justify-center gap-x-2'>
                <Button href={url} target="_blank" rel="noopener noreferrer">Ver más</Button>
            </div>
        </div>
    );
}

export default RecipeCardContainer;
