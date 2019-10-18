import React, {Component} from 'react';
import './House.css'

class House extends Component {

    render(){
        return(
            <div className='house'>
                {this.props.element.name}
                {this.props.element.address}
                {this.props.element.city}
                {this.props.element.state}
                {this.props.element.zipcode}
                
                <button onClick={() => this.props.delete(this.props.element.id)}>Delete</button>

            </div>
        )
    }
}

export default House