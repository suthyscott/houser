import React, {Component} from 'react';
import './House.css'

class House extends Component {

    render(){
        return(
            <div className='house'>
                <div >
                    <img id='img' src={this.props.element.img} alt='house'/>
                </div>

                <section>
                <p>Property name: {this.props.element.name}</p>
                <p>Address: {this.props.element.address}</p>
                <p>City: {this.props.element.city}</p>
                <p>State: {this.props.element.state}</p>
                <p>Zip: {this.props.element.zipcode}</p>
                </section>

                <section>
                <p>Monthly Mortgage: {this.props.element.mortgage}</p>
                <p>Desired Rent: {this.props.element.rent}</p>

                <button onClick={() => this.props.delete(this.props.element.id)}>Remove</button>
                </section>
               
                
                

            </div>
        )
    }
}

export default House