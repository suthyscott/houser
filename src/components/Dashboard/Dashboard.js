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
       .then(axios.get(`/api/houselist`).then(res => {
        this.setState({
          list: res.data
        })
      })
      .catch(err => {
        console.log(err)
      }))
   }

    render(){
        return(
            <div className='house-list'>
                Dashboard
                {this.state.list.map(e => {
                    return <House element={e} delete={this.handleDeleteHouse}/>
                })}
                
                <Link to='/wizard/stepone'><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default Dashboard