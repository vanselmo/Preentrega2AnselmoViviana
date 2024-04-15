import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { foodId } = useParams();
    const [mealDetail, setMealDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const apiID = '<APPID>';
        const apiKey = '<APIKEY>';
        console.log(foodId);
        const fetchMealDetail = async () => {
            try {
                const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?foodId=${foodId}&app_id=${apiID}&app_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMealDetail(data.hints[0].food); // Considerando que la API devuelve un solo resultado para la comida especificada
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchMealDetail();
    }, [foodId]);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <h1>{mealDetail.label}</h1>
                    <img src={mealDetail.image} alt="Imagen de comida" />
                    <p>Precio: ${Math.floor(Math.random() * 20) + 5}</p>
                </div>
            )}
        </div>
    );
}

export default ItemDetailContainer;
