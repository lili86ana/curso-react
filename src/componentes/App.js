import React from 'react'
import Regards from './regards'
//Creacion de componente
//Componentes funcionales
// const App = () => {
//     return <div></div>
// }
// function App(){
//     return <div></div>
// }
class App extends React.Component {
    constructor() {
        super()
        this.state={
            name:'Liliana', 
            lastName:'Trejo'
        }
      
    }
    ChangeState(objetName){
        this.setState(objetName)
      
    } 

      render() {
        return (
            <div>
                <Regards objetName={this.state}/>
                <button onClick={()=>this.ChangeState({ name:'Ricardo', lastName:'Valle'})}>Maria</button>
                <button onClick={()=>this.ChangeState({ name:'Antonio', lastName:'Mendoza'})}>Fabian </button>
                <button onClick={()=>this.ChangeState({ name:'Juana', lastName:'Romero'})}>Antonio</button>
            </div>
        )
    }
}
export default App