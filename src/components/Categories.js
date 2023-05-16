import React from 'react'
let one = require("../assets/one.png");
let two = require("../assets/two.png");
let three = require("../assets/three.png");
let four = require("../assets/four.png");
let five = require("../assets/five.png");
const items = [
  {
    Image: one,
    Text: "WI-FI"
  },
  {
    Image: two,
    Text: "DEALS"
  },
  {
    Image: three,
    Text: "Bkaery Items"
  },
  {
    Image: four,
    Text: "PICK-UP"
  },
  {
    Image: five,
    Text: "TRAVELS"
  },
]

const Categories = () => {
  return (
    <div style={{display: 'flex', justifyContent:'center', marginTop:'5px',
    padding:'20px',backgroundColor:'#fff',marginBottom:'10px'}}>
    {items.map((item,index) => (
     <div key={index} style={{alignItems:'center',marginRight:'140px'}}>
        <img src={items[index].Image} alt='' style={{width:'60px',height:'50px',
        resizeMode:'contain',marginLeft: '100%'}} />
        <h5 style={{fontFamily:'Lexend',fontSize:'15px',fontWeight:'400',lineHeight:'20px',
        letterSpacing:'0.05em',textAlign:'center',marginLeft: '100%'}}>{items[index].Text}</h5>
      </div>
    ))}
  </div>
  )
}

export default Categories