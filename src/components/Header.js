import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'



const Header = ({title,onAdd,showValue}) => {

const location = useLocation()
    return (
        <header className = 'header'>
            <h1>{title} </h1>
            {location.pathname === '/' && (<Button color= {showValue ? 'red' : 'green'} onClick = {onAdd} text = {showValue ? 'Close' :'Add'}  />)}
        </header>
     
    )
}

Header.defaultProps ={
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
