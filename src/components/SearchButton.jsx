import React from 'react'
import classes from './modules/SearchButton.module.css'

const SearchButton = ({ children, ...props }) => {
    return (
        <button {...props} className={[props.className, classes.searchButton].join(' ')}>
            {children}
        </button>
    )
}

export default SearchButton