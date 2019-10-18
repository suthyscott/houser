import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {getState} from '../../ducks/store'


class StepOne extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode
        }
        
        const reduxState = getState()
    }
    
    componentDidMount = () => {

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

    render(){
        console.log(this.props)
        const {name, address, city, state, zipcode} = this.state
        return(
            <div>
               Step One

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

                <Link to='/'><button onClick={(e) => this.handleAddHouse()} >Complete</button></Link>
                <Link to='/wizard/steptwo'><button onClick={() => {
                    this.props.getState(
                        name, 
                        address,
                        city,
                        state,
                        zipcode
                    )
                }}>Next Step</button></Link>

            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {name, address, city, state, zipcode, img, mortgage, rent} = reduxState

    return {
        name,
        address,
        city,
        state,
        zipcode,
        img,
        mortgage,
        rent
    }
}

// const mapDispatchToProps = {
//     updateName,
//     getUser, mapDispatchToProps
// }

export default connect(mapStateToProps, {getState})(StepOne)