import { Button } from 'antd'
import React from 'react'

function RecipeCardContainer() {
    return (
        <div className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:scale-105 transition">
            <img className='mb-4 grayscale hover:grayscale-0' src="./img/brownie.jpg" alt="card-image" />
            <h2 className='my-2 font-bold text-sm text-center'></h2>
            <p className='text-center mb-2'></p>
            <div className='flex items-center justify-center gap-x-2'>
                <Button>Ver más</Button>
                <Button className='text-green-500 font-bold'>Comprar</Button>
            </div>
        </div>
    )
}

export default RecipeCardContainer
