import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class StepThree extends Component {
    constructor(){
        super()

        this.state ={
            mortgage: 0,
            rent: 0
        }
    }

    handleUpdateMortgage = (e) =>{
        this.setState({
            mortgage: e.target.value
        })
        console.log(this.state.name)
    }

    handleUpdateRent = (e) =>{
        this.setState({
            rent: e.target.value
        })
        console.log(this.state.address)
    }

    handleAddHouse = () => {
        console.log('hit')
        const {name, address, city, state, zipcode} = this.state
        axios.post('api/addhouse', {name, address, city, state, zipcode})

        console.log('hit')

    }

    render(){
        return(
            <div>
               Step One

                <div className='input-form'>
                    Monthly Mortgage Amount
                    <input name='mortgage' onChange={e => this.handleUpdateMortgage(e)}/>
                    Desired Monthly Rent
                    <input name='rent' onChange={e => this.handleUpdateRent(e)}/>
                    
                </div>

                <Link to='/steptwo'><button >Previous Step</button></Link>
                <Link to='/'><button onClick={(e) => this.handleAddHouse()} >Complete</button></Link>

            </div>
        )
    }
}

export default StepThree