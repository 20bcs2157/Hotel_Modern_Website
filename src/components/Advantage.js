import React from 'react'
import './Advantage.css';

let one = require("../assets/one.png");
let two = require("../assets/two.png");
let three = require("../assets/three.png");
let four = require("../assets/four.png");
let five = require("../assets/five.png");

const items = [
    {
        Image:three,
        text:'BREAKFAST',
        subtext:'There has never been a sadness that can not be cured with breakfast foods.'
    },
    {
        Image:one,
        text:'WIFI',
        subtext:'Get the best Wifi connectivity without any interference.'
    },
    {
        Image:five,
        text:'PICKUP',
        subtext:'There has never been a sadness that can not be cured with breakfast foods.'

    },
    {
        Image:four,
        text:'AIR TICKETS',
        subtext:'Book your tickets and traveling with smile.'
    },
    {
        Image:two,
        text:'DEALS',
        subtext:'The best flight deals to everywhere, from anywhere.'
    },
]

const Advantage = () => {
  return (
    <>
    <div className='advantages'>
        <div className='advantages__info'>
            <div className='adv__header'>
                <h1>Advantage of staying with us</h1>
                <h4>Sapien gravida dolor commodo</h4>
            </div>
            <div style={{justifyContent:'center', marginTop:5}}>
                {items.map((item,index) => (
                    <div key={index} style={{alignItems:'center',marginRight:30,display:'flex',marginLeft:'143px'}}>
                        <img src={items[index].Image} className='adv__img' alt='' style={{width:'50px',height:'50px',
        resizeMode:'contain'}} />
                        <div> 
                        <h5 className='adv__h5'>
                            {items[index].text}
                        </h5>
                        <h5 className='adv__h'>
                            {items[index].subtext}
                        </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Advantage