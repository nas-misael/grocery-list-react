import React, {useRef} from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef()
    return (
        <form className='addForm' onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='addItem'>Adicionar Item</label>
            <input 
                autoFocus
                ref={inputRef}
                id='addItem'
                placeholder='Adicionar Item'
                required
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}    
            />

            <button type='submit' onClick={() => inputRef.current.focus()} aria-label='Add Item'><FaPlus /></button>
        </form>
    )
}

export default AddItem
