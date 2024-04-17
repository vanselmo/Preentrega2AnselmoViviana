import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard.jsx';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const { category } = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Comidas");

    useEffect(() => {
        setLoading(true);

        const fetchMeals = async () => {
            try {
                const response = await fetch('../../meals.json');
                const data = await response.json();

                let filteredMeals = data.meals;
                if (category) {
                    filteredMeals = data.meals.filter((meal) => meal.category === category);
                    setTitle(getCategoryTitle(category));
                } else {
                    setTitle("Comidas");
                }

                setMeals(filteredMeals);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchMeals();

    }, [category]);

    const getCategoryTitle = (category) => {
        switch (category) {
            case 'vegan':
                return 'Veganas';
            case 'glutenfree':
                return 'Sin Gluten';
            default:
                return 'Comidas';
        }
    };

    return (
        <div>
            <h1>{title}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {meals.map((meal) => (
                        <FoodCard key={meal.id} meal={meal} />
                    ))}
                </section>
            )}
        </div>
    );
}

export default ItemListContainer;
