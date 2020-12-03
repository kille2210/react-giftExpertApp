import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {


     const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //     //setcategories([...categories, 'Bug Bunny']);
    //    setcategories(cats => [...cats, 'Bugs Bunny']);
    //     //    Para incluirlo al inicio, se usaría al reves
    //     // setcategories(['Mafalda',...categories]);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key= { category }
                        category = { category }
                        />
                    ))
                }
            </ol>
        </>
    )
}



