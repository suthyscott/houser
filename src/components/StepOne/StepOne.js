import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import  {addStepOne, cancel} from '../../ducks/reducer';


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
      
    }
    
  
    // componentDidMount = () => {
    //     this.setState({
    //         name: this.props.name,
    //         address: this.props.address,
    //         city: this.props.city,
    //         state: this.props.state,
    //         zipcode: this.props.zipcode
    //     })
    // }


    handleUpdateName = (e) =>{
        this.setState({
            name: e.target.value
        })
        // console.log(this.state.name)
    }

    handleUpdateAddress = (e) =>{
        this.setState({
            address: e.target.value
        })
        // console.log(this.state.address)
    }

    handleUpdateCity = (e) =>{
        this.setState({
            city: e.target.value
        })
        // console.log(this.state.city)
    }

    handleUpdateState = (e) =>{
        this.setState({
            state: e.target.value
        })
        // console.log(this.state.state)
    }

    handleUpdateZipcode = (e) =>{
        this.setState({
            zipcode: e.target.value
        })
        // console.log(this.state.zipcode)
    }

    render(){
        console.log(this.props)        
        const {name, address, city, state, zipcode} = this.state
        return(
            <div>
                            <div className='input-form'>
                    Property Name
                    <input name='name' placeholder='name' value={this.state.name} onChange={e => this.handleUpdateName(e)}/>
                    Address
                    <input name='address' placeholder='address' value={this.state.address} onChange={e => this.handleUpdateAddress(e)}/>
                    City
                    <input name='city' placeholder='city' value={this.state.city} onChange={e => this.handleUpdateCity(e)}/>
                    State
                    <input name='state' placeholder='state' value={this.state.state} onChange={e => this.handleUpdateState(e)}/>
                    Zip
                    <input name='zipcode' placeholder='zipcode' value={this.state.zipcode} onChange={e => this.handleUpdateZipcode(e)}/>
                    
                </div>


                <Link to='/wizard/steptwo'><button onClick={() => this.props.addStepOne(name, address, city, state, zipcode)}>Next Step</button></Link>

            </div>
        )
    }
}

const mapStateToProps = reduxState => {
   const {name, address, city, state, zipcode} = reduxState.reducer
    return {
        name, 
        address, 
        city, 
        state,
        zipcode
    }
}


export default connect(mapStateToProps, {addStepOne, cancel})(StepOne)