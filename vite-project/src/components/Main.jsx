import React from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer.jsx'

function Main() {
    return (
        <main className="p-4 grow">
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:category' element={<ItemListContainer />} />
                <Route path='/item/:foodId' element={<ItemDetailContainer />} />
            </Routes>
        </main>
    )
}

export default Main