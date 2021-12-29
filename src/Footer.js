import React from 'react'

function Footer({length}) {
    const currentYear = new Date()
    return (
        <footer>
            <p>Total de itens: {length}</p>
            <p>Copyright &copy; {currentYear.getFullYear()}</p>
        </footer>
    );
}

export default Footer
