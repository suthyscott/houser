import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            list: []
        }
    }

    componentDidMount = () => {
        axios.get(`/api/houselist`).then(res => {
            this.setState({
              list: res.data
            })
          })
          .catch(err => {
            console.log(err)
          })
    }

   handleDeleteHouse = (id) => {
       axios.delete(`/api/deletehouse/${id}`)
       .then(res => {
         this.setState({
           list: res.data
         })
       })
   }

   componentDidUpdate(prevProps, prevState){
     if(this.state !== prevState){
        this.render()
     }
   }

    render(){
        return(
            <div className='house-list'>
              <div className='sub-header'>
                <h1>Dashboard</h1>
                <Link to='/wizard/stepone'><button>Add New Property</button></Link>
              </div>
                
              <div className='home-listings'>
                <h3>Home Listings</h3>
                {this.state.list.map(e => {
                    return <House element={e} delete={this.handleDeleteHouse}/>
                })}
              </div>
                
            </div>
        )
    }
}

export default Dashboard