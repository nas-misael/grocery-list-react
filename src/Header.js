import React from 'react'

function Header({title}) {
    // const headerStyle = {
    //     backgroundColor: 'mediumblue',
    //     color: '#fff'
    // }
    // <header style={headerStyle}/>

    

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// Default props
Header.defaultProps = {
    title: "Default Title"
}

export default Header
