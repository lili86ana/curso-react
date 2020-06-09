//importacion de componentes
import React from 'react'
import ReactDOM from 'react-dom'

//creacion de componente
const App = () => {
    return <div>Hola mundo</div>
}
//renderizado componente
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)