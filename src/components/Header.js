import PropTypes from 'prop-types';
import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <h3 style={bylineStyle}>Your friendly board game nomination app</h3>
            <Button color='green' text='Add boardgame nomination' onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Metis'
}

Header.propTypes = {
    title: PropTypes.string,
}

const bylineStyle = {
    fontStyle: 'italic',
    color: 'grey'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


export default Header
