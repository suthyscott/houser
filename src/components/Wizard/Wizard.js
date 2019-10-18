import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css'
import {Route} from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';



class Wizard extends Component {
    constructor(){
        super()

    }

    render(){
        return(
            <div>
                Wizard

                <Link to='/'><button>Cancel</button></Link>
                <Route path='/wizard/stepone' component={StepOne}/>
                <Route path='/wizard/steptwo' component={StepTwo}/>
                <Route path='/wizard/stepthree' component={StepThree}/>

            </div>
        )
    }
}

export default Wizard