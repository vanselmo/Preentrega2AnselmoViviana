import React from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import Pages from './Pages.jsx'

function Main() {
    return (
        <Pages title="Nuestros Productos">
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <ItemListContainer
                    name="Brownie"
                    price={200} />
                <ItemListContainer />
                <ItemListContainer />
                <ItemListContainer />
            </section>
        </Pages>
    )
}

export default Main
