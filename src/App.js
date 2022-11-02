import React from 'react';
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRooms from './pages/SingleRoom';

const App = () => {
    return ( 
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/rooms/:slug' element={<SingleRooms/>}/>
    </Routes>
    </> );
}
 
export default App;