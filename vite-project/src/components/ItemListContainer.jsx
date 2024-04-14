import { Button } from 'antd'
import { useState } from 'react'

function ItemListContainer(props) {

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:scale-105 transition">
            <img className='mb-4' src="./img/brownie.jpg" alt="card-image" />
            <h2 className='my-2 font-bold text-sm text-center'>{props.name}</h2>
            <p className='text-center mb-2'>{props.price}</p>
            <div className='flex items-center justify-center gap-x-2'>
                <Button>Ver más</Button>
                <Button className='text-green-500 font-bold'>Comprar</Button>
            </div>
            <button onClick={handleClick}>
                Like
                <span>{counter}</span>
            </button>
        </div>
    )
}

export default ItemListContainer;
