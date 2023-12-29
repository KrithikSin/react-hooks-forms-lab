import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Produce');
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        onItemFormSubmit({
            id: uuid(),
            name,
            category,
        });
    }
    return (
        <form onSubmit={handleSubmit} className='NewItem'>
            <label>
                Name:
                <input
                    onChange={handleNameChange}
                    type='text'
                    name='name'
                    value={name}
                />
            </label>

            <label>
                Category:
                <select
                    name='category'
                    onChange={handleCategoryChange}
                    value={category}
                >
                    <option value='Produce'>Produce</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Dessert'>Dessert</option>
                </select>
            </label>

            <button type='submit'>Add to List</button>
        </form>
    );
}

export default ItemForm;
