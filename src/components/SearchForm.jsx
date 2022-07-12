import React, { useState } from 'react'
import getRepos from '../API/searchService';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput'

const SearchForm = ({ setError, setRepos, ...props }) => {

    const [inputValue, setInputValue] = useState('');

    const searchRepos = async (event) => {
        event.preventDefault();
        if (inputValue) {
            getRepos(inputValue)
                .then((response) => {
                    setRepos(response.data.slice(0, 10));
                    setError(false);
                })
                .catch(() => {
                    setRepos('');
                    setError(true);
                })
        }
    }

    return (
        <form onSubmit={searchRepos} className={props.className}>
            <SearchInput
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <SearchButton>
                Поиск
            </SearchButton>
        </form>
    )
}

export default SearchForm