import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css'
import {Route} from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import {connect} from 'react-redux';
import {complete, cancel} from '..//../ducks/reducer'




class Wizard extends Component {
    constructor(){
        super()

    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <div>
                   Add New Listing
                   <Link to='/'><button onClick={() => this.props.cancel()}>Cancel</button></Link>
               </div>
               
                <Route path='/wizard/stepone' component={StepOne}/>
                <Route path='/wizard/steptwo' component={StepTwo}/>
                <Route path='/wizard/stepthree' component={StepThree}/>

            </div>
        )
    }
}

export default connect(null, {cancel})(Wizard)