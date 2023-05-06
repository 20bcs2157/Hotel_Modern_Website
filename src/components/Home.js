import React from 'react'
import "./Home.css"
import Banner from './Banner'
import Card from './Card';
import Categories from './Categories'
import Advantage from './Advantage';
import Footer from './Footer';

let p1 = require('../assets/baba.jpg');
let p2 =  require("../assets/krishna.jpg");
let p3 = require("../assets/karishma.jpg");


export const Home = () => {
  return (
    <div className='home'>
        <Banner />
        <div className='home__categories'>
          <div style={{display: 'flex',alignItems:"flex-end",justifyContent:"center",flexDirection:"column",marginTop:"180px", 
          marginBottom:"90px", height: "15vh"}}>
            <div style={{background: "#EB8A04", height:"170px", width:"50%", zIndex:"-1",position:'absolute'}}>
            </div>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',background:'transparent',zIndex:'1',
          marginRight:'480px'}}>
              <h1 style={{color:'blue',marginBottom:'0px',}}
              className='quote__h1' >Full service, at your disposal</h1>
              <h4 style={{display:'flex',alignItems:'center',justifyContent:'center',color:'gray',marginTop:'0px'}}
              className='quote__h4'>
                More than you can Imagine
              </h4>
            </div>
          </div> 
          <Categories />
          <div style={{display: '',alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"60px", 
          marginBottom:"120px", height: "15vh"}}>
            <div style={{background: "#EB8A04", height:"170px", width:"50%", zIndex:"-1",position:'absolute'}}>
            </div>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',background:'transparent',zIndex:'1',
          marginRight:'480px'}}>
              <h1 style={{color:'blue',marginBottom:'0px',}}
              className='quote__h1' >Choose What's Best For You!</h1>
              <h4 style={{display:'flex',alignItems:'center',justifyContent:'center',color:'gray',marginTop:'0px'}}
              className='quote__h4'>
              Make your Vacation comfortable.
              </h4>
            </div>
          </div> 
        </div>
        <div className='home__section'>
          <Card src={p1} title="Hotel BaBa by RCG Hotels" description="Start your Weekend at the hotel Krishna by RCG hotels 
          with a Full Breakfasr, then visit the Museum and Art Gallery, Home
          to a Beatiful Collection of Historical documents, Indian Art and a beatiful exhibition on the region's history."/>
          <Card src={p2} title="Hotel krishna by RCG Hotels" description="It was the wonderful stay we overall enjoyed hospitality was 
          good hygiene was good i recommend this Hotel Krishna.By RCG Hotels was so good rooms were so clean staff are so humble.
          the food taste so good so i highly recommend this Hotel Krishna."/>
          <Card src={p3} title="Hotel krishna by RCG Hotels" description="Start your Weekend at the hotel Krishna by RCG hotels 
          with a Full Breakfasr, then visit the Museum and Art Gallery, Home
          to a Beatiful Collection of Historical documents, Indian Art and a beatiful exhibition on the region's history."/>
        </div>
        <div>
          <h1 className='quotes__card__'>
            RCG Hotels stand as as true paragon of world class hospitality
            and have some of the best luxury hotels and resorts in India,
            Book handpicked hotels with certified quality.
          </h1>
        </div>
        <div style={{display: 'flex',alignItems:"flex-end",justifyContent:"center",flexDirection:"column",marginTop:"60px", 
          marginBottom:"120px", height: "15vh"}}>
            <div style={{background: "#EB8A04", height:"170px", width:"50%", zIndex:"-1",position:'absolute'}}>
            </div>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',background:'transparent',zIndex:'1',
          marginRight:'480px'}}>
              <h1 style={{color:'blue',marginBottom:'0px',}}
              className='quote__h1' >Luxury Redefined!</h1>
              <h4 style={{display:'flex',alignItems:'center',justifyContent:'center',color:'gray',marginTop:'0px'}}
              className='quote__h4'>
              Luxury is Personal.
              </h4>
            </div>
          </div> 
          <div className='some__quotes'>
            <h4>
            Usually Hotel Krishna - By RCG Hotelss near airports 
            and not much care is given to the service and amenities. 
            But Hotel Krishna - By RCG Hotels krishna was really nice. 
            The rooms were spacious with lot of natural light. 
            The whole Hotel Krishna - By RCG Hotels was clean. 
            The staff was polite and professional. 
            The price was very reasonable. The food was very good.
            </h4>
          </div>
          <Advantage />
          <div style={{display: '',alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"60px", 
          marginBottom:"120px", height: "15vh"}}>
            <div style={{background: "#EB8A04", height:"170px", width:"50%", zIndex:"-1",position:'absolute'}}>
            </div>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',background:'transparent',zIndex:'1',
          marginRight:'480px'}}>
              <h1 style={{color:'blue',marginBottom:'0px',}}
              className='quote__h1' >They Loved Our Hospitality</h1>
              <h4 style={{display:'flex',alignItems:'center',justifyContent:'center',color:'gray',marginTop:'0px'}}
              className='quote__h4'>
              Explore the World with Ease.
              </h4>
            </div>
          </div> 
          <Footer />
      </div>
  )
}
 export default Home