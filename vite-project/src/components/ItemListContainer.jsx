// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard.jsx';

function ItemListContainer({ category }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const apiID = '<APPID>';
        const apiKey = '<APIKEY>';

        const fetchMeals = async () => {
            try {
                let apiUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiID}&app_key=${apiKey}`;

                if(category) {
                    apiUrl = `https://api.edamam.com/api/food-database/v2/parser?q=${category}&app_id=${apiID}&app_key=${apiKey}`;   
                }
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMeals(data.hints);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchMeals();

    }, [category]);

    return (
        <div>
            <h1>Comidas</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {meals.map((meal, index) => (
                        
                        <FoodCard key={index} meal={meal.food} />
                    ))}
                </section>
            )}
        </div>
    );
}

export default ItemListContainer;
