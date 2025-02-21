//import { StrictMode } from 'react'
//import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
/*
function MyApp(){
    return(
        <h1>My Custom App || </h1>
    )
}

const AnElement = (
    <a href='https://google.com' target='_blank'>Visit Google here!</a>
)*/

//const reactElement = React.createElement('a',{href:'https://google.com', target:'_blank'},'Visit Google here! bitches')

createRoot(document.getElementById('root')).render(
  
   <App />
  
)
