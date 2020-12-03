import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // para manejar el enter
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            //Para que la categoría solicitada aparezca al comienzo, se cambia el orden de la sig. instruccion 
            //setCategories(cats => [...cats, inputValue]);
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
