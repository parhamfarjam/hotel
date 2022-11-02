import React, { Component } from 'react';
import Title from './Title';
import {FaBeer} from 'react-icons/fa'

class Servises extends Component {
    state = { 
        servises:[
            {
                icon:<FaBeer/>,
                title:'free',
                info:'jsjj kddsdp hdgaoiefb asdkjaghr asludgh llasyd dswkhdf'
            },
            {
                icon:<FaBeer/>,
                title:'free',
                info:'jsjj kddsdp hdgaoiefb asdkjaghr asludgh llasyd dswkhdf'
            },
            {
                icon:<FaBeer/>,
                title:'free',
                info:'jsjj kddsdp hdgaoiefb asdkjaghr asludgh llasyd dswkhdf'
            },
            {
                icon:<FaBeer/>,
                title:'free',
                info:'jsjj kddsdp hdgaoiefb asdkjaghr asludgh llasyd dswkhdf'
            },
        ]
     } 
    render() { 
        return ( <>
        <section className='services'>
        <Title title='servises'/> 
        <div className="services-center">
            {this.state.servises.map((item,index)=>{
                return (
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
        </section>
        </>);
    }
}
 
export default Servises;