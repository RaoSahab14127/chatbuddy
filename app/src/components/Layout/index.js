import React from 'react'

function Layout(props) {
  return (
    <div>
        <header>Header</header>
        {props.children}
    </div>
  )
}

export default Layout