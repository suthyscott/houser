import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css'
import axios from 'axios';


class Wizard extends Component {
    constructor(){
        super()

        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleUpdateName = (e) =>{
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    handleUpdateAddress = (e) =>{
        this.setState({
            address: e.target.value
        })
        console.log(this.state.address)
    }

    handleUpdateCity = (e) =>{
        this.setState({
            city: e.target.value
        })
        console.log(this.state.city)
    }

    handleUpdateState = (e) =>{
        this.setState({
            state: e.target.value
        })
        console.log(this.state.state)
    }

    handleUpdateZipcode = (e) =>{
        this.setState({
            zipcode: e.target.value
        })
        console.log(this.state.zipcode)
    }

    handleAddHouse = () => {
        console.log('hit')
        const {name, address, city, state, zipcode} = this.state
        axios.post('api/addhouse', {name, address, city, state, zipcode})

        console.log('hit')

    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if(prevState !== state)
    // }

    render(){
        return(
            <div>
                Wizard

                <div className='input-form'>
                    Property Name
                    <input name='propertyName' placeholder='name' onChange={e => this.handleUpdateName(e)}/>
                    Address
                    <input name='propertyAddress' placeholder='address' onChange={e => this.handleUpdateAddress(e)}/>
                    City
                    <input name='propertyCity' placeholder='city' onChange={e => this.handleUpdateCity(e)}/>
                    State
                    <input name='propertyState' placeholder='state' onChange={e => this.handleUpdateState(e)}/>
                    Zip
                    <input name='propertyZipcode' placeholder='zipcode' onChange={e => this.handleUpdateZipcode(e)}/>
                    
                </div>

                <Link to='/'><button>Cancel</button></Link>
                <Link to='/'><button onClick={(e) => this.handleAddHouse()} >Complete</button></Link>

            </div>
        )
    }
}

export default Wizard