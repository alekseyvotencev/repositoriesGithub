import React from 'react'
import classes from './modules/SearchInput.module.css'

const SearchInput = (props) => {
    return (
        <input {...props} className={[props.className, classes.searchInput].join(' ')} />
    )
}

export default SearchInput