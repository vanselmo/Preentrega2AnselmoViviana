import React from 'react'

function Pages(props) {
    return (
        <main className="p-4 grow">
            <h1 className='text-l mt-10 mb-10 text-left font-bold text-green-500 underline'>{props.title}</h1>
            {props.children}
        </main>
    )
}

export default Pages
