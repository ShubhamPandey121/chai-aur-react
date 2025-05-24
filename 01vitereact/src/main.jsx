import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
    <div>
      <h1>Custom App| Shubham</h1>
    </div>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Googlu</a>
)

const ReactElement= React.createElement(
  'a',
  {href:'https://nitjsr.ac.in',target:'_blank'},
  'visit nit'
)
createRoot(document.getElementById('root')).render(
  
    <App />
  
)
