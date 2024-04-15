import RecipeCardContainer from './RecipeCardContainer.jsx'

function ItemListContainer() {

    return (
        <div>
            <h1>Recetas</h1>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <RecipeCardContainer />
            </section>
        </div>
    )
}

export default ItemListContainer;