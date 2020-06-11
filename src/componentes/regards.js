
import React from 'react'

class Regards extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return (
            <div>
                <h1>Hola: {this.props.objetName.name+ ' '+ this.props.objetName.lastName}</h1>
            </div>
        )
    }
}
export default Regards