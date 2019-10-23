import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import  {addStepThree, cancel} from '../../ducks/reducer';



class StepThree extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode,
            img: this.props.img,    
            mortgage: this.props.mortgage,
            rent: this.props.rent
        }
    }

    handleUpdateMortgage = (e) =>{
        this.setState({
            mortgage: e.target.value
        })
        // console.log(this.state.mortgage)
    }

    handleUpdateRent = (e) =>{
        this.setState({
            rent: e.target.value
        })
        // console.log(this.state.rent)
    }

    handleAddHouse = () => {
        console.log('hit')
        const {mortgage, rent} = this.state
        const {name, address, city, state, zipcode, img} = this.props
        console.log(name)
        axios.post('/api/addhouse', {name, address, city, state, zipcode, img, mortgage, rent})

        this.props.cancel()

    }

    render(){
        const {mortgage, rent} = this.state
        return(
            <div>
                <p>Recommended Rent: {this.state.mortgage*1.25}</p>
                <div className='input-form'>
                    Monthly Mortgage Amount
                    <input name='mortgage' value={this.state.mortgage} onChange={e => this.handleUpdateMortgage(e)}/>
                    Desired Monthly Rent
                    <input name='rent' value={this.state.rent} onChange={e => this.handleUpdateRent(e)}/>
                    
                </div>

                <Link to='/wizard/steptwo'><button onClick={() => this.props.addStepThree(mortgage, rent)}>Previous Step</button></Link>
                <Link to='/'><button onClick={() => this.handleAddHouse()}>Complete</button></Link>

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
 
 
 export default connect(mapStateToProps, {addStepThree, cancel})(StepThree)