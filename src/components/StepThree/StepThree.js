import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import  {addStepThree} from '../../ducks/reducer';



class StepThree extends Component {
    constructor(props){
        super(props)

        this.state ={
            mortgage: this.props.mortgage,
            rent: this.props.rent
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
        const {mortgage, rent} = this.state
        return(
            <div>
               Step Three

                <div className='input-form'>
                    Monthly Mortgage Amount
                    <input name='mortgage' value={this.state.mortgage} onChange={e => this.handleUpdateMortgage(e)}/>
                    Desired Monthly Rent
                    <input name='rent' value={this.state.rent} onChange={e => this.handleUpdateRent(e)}/>
                    
                </div>

                <Link to='/wizard/steptwo'><button onClick={() => this.props.addStepThree(mortgage, rent)}>Previous Step</button></Link>
                <Link to='/'><button onClick={(e) => this.handleAddHouse()} >Complete</button></Link>

            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {name, address, city, state, zipcode, img, mortgage, rent}= reduxState.reducer
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
 
 
 export default connect(mapStateToProps, {addStepThree})(StepThree)