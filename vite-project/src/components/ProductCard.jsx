import { Button } from 'antd'
import { useState } from 'react'

function ProductCard(props) {

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="bg-white border-2 border-gray-100 rounded-lg p-6">
            <img src="./img/brownie.jpg" alt="" className='mb-4' />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
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

export default ProductCard;
