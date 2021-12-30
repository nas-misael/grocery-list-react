import React from 'react'

const SearchItem = ({search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Pesquisa</label>
            <input 
                type='text' 
                id='search'
                role='searchbox'
                placeholder='Pesquise seus itens'
                value={search}
                onChange={(e) => setSearch(e.target.value)}   
            />
        </form>
    )
}

export default SearchItem
