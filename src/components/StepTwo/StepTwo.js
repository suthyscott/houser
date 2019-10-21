import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addStepTwo} from '../../ducks/reducer';



class StepTwo extends Component {
    constructor(props){
        super(props)

        this.state = {
            img: this.props.img
        }

   
    }

    handleUpdateImageURL = (e) =>{
        this.setState({
            img: e.target.value
        })
        // console.log(this.state.img)
    }

    render(){
        const {img} = this.state
        console.log(img)
        console.log(this.props.img)
        return(
            <div>
               Step Two

                <div className='input-form'>
                    Property Name
                    <input name='img' placeholder='Image URL' value={this.state.img} onChange={e => this.handleUpdateImageURL(e)}/>
                    
                </div>

                <Link to='/wizard/stepone'><button onClick={() => this.props.addStepTwo(img)}>Previous Step</button></Link>
                <Link to='/wizard/stepthree'><button onClick={() => this.props.addStepTwo(img)}>Next Step</button></Link>

            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {img} = reduxState.reducer
     return {
        img
     }
 }
 
 
 export default connect(mapStateToProps, {addStepTwo})(StepTwo)