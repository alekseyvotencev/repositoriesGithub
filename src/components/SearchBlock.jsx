import React from 'react'
import SearchForm from './SearchForm';

const SearchBlock = ({ setRepos, setError }) => {

    return (
        <div className="container">
            <SearchForm setRepos={setRepos} setError={setError} className="form" />
        </div>
    )
}

export default SearchBlock