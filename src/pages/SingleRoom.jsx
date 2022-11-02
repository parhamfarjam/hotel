import React, { Component } from 'react';
import defaultImg from '../images/room-1.jpg'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {RoomContext} from '../context'
import { Link } from 'react-router-dom';

class SingleRooms extends Component {
   
   constructor(props){
    super(props)
    console.log(this.props);
  }

    state = {  } 
    render() { 
       
        return ( <h3>single rooms</h3> );
    }
}
 
export default SingleRooms;