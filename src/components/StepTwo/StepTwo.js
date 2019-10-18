import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getState} from '../../ducks/store'


class StepTwo extends Component {
    constructor(){
        super()

        this.state = {
            img: ''
        }

        const reduxState = getState()
    }

    handleUpdateImageURL = (e) =>{
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    render(){
        return(
            <div>
               Step Two

                <div className='input-form'>
                    Property Name
                    <input name='imgURL' placeholder='Image URL' onChange={e => this.handleUpdateImageURL(e)}/>
                    
                </div>

                <Link to='/wizard/stepone'><button >Previous Step</button></Link>
                <Link to='/wizard/stepthree'><button >Next Step</button></Link>
                <Link to='/'><button onClick={(e) => this.handleAddHouse()} >Complete</button></Link>

            </div>
        )
    }
}

export default StepTwo