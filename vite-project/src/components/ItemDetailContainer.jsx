import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { foodId } = useParams();
    const [mealDetail, setMealDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchMealDetail = async () => {
            try {
                const response = await fetch('../../meals.json');
                const data = await response.json();
                const meal = data.meals.find((meal) => meal.id === parseInt(foodId));
                setMealDetail(meal);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchMealDetail();
    }, [foodId]);

    return (
            <div className="flex justify-center">


                <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
                    {loading ? (
                        <p className="p-4 text-center">Cargando...</p>
                    ) : (
                        <div>
                            <img className="w-full object-cover" src={mealDetail.photo} alt="Imagen de comida" />
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold mb-2">{mealDetail.name}</h1>
                                <p className="text-gray-700 mb-2">Precio: ${mealDetail.price}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    );
}

export default ItemDetailContainer;
