import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React, { useState } from 'react'
import X2JS from 'x2js';

export const Search = () => {

    const [searchQuery, setSearchQuery] = useState(null)
    const [BGGSearchResult, setBGGSearchResult] = useState([])

    var x2jsClient = new X2JS();

    function handleClick(e) {
        e.preventDefault();
        BGGLookup(searchQuery);
    }

    async function BGGLookup(query) {
        const url = `http://boardgamegeek.com/xmlapi2/search?query=${query}&type=boardgame`    
        
        await fetch(url)
            .then(response => response.text())
            .then(data => new DOMParser().parseFromString(data, "text/xml"))
            .then(data => new XMLSerializer().serializeToString(data))
            .then(data => x2jsClient.xml2js(data))
            .then(data => {
                var result = data.items.item;
                var mapped = result.map(item => ({
                    id: item._id,
                    name: item.name._value,
                    //yearpublished: item.yearpublished._value,
                    type: item._type,
                }));
                return mapped;
            })
            .then((mapped) => setBGGSearchResult(mapped))
            .catch(err => console.log(err));
    }
        
    return (
        <div className='app'>
            <form id='searchForm'>
                <label>Seach for a game</label>
                <br/>
                <input type='text' onChange={(e)=>(setSearchQuery(e.target.value))} id='searchInput' name='searchInput'/>
            </form>
            <button className='btn' form='searchForm' onClick={ handleClick }>Search</button>
            <h1>searchQuery: {searchQuery}</h1>
            <h1>search result: {BGGSearchResult.length > 0 ? BGGSearchResult[0].name : "please search for a game"}</h1>
        </div>
    )
}
