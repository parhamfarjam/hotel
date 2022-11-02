import React from 'react';
import Room from './Room';

const RoomList = ({rooms}) => {
    if(rooms.lenght === 0){
        return(
            <div className="empty-search">
                <h3>unfortinately</h3>
            </div>
        )
    }
    return ( 
    <>
    <section className='roomslist'>
        <div className="roomslist-center">
            {rooms.map((item)=>{
                <Room key={item.id} room={item}/>
            })}
        </div>
    </section>
    </> );
}
 
export default RoomList;