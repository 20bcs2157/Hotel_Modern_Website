import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import {firebase} from "../firebase";

let vector = require("../assets/vector.jpg");
let adult = require("../assets/adult.jpg");

const Banner = () => {
    const email = firebase.auth().currentUser?.email;
    const navigate = useNavigate();

    const [date,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [options,setOptions] = useState({
        adult: 1,
        Children: 0,
    })

    const [showSearch, setShowsearch] = useState(false);

    const handleOption = (name, operation) => {
        setOptions ( (prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] -1,
            }
        })
    }

    const handle = () => {
        if(!email){
            alert("You have to login first")
        }
        else{
            navigate("/search");
        }
    }

  return (
    <>
    <div className='banner'>
        <div className='banner__search'>
            {
                showSearch &&  <DateRange 
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                minDate={new Date()}
                />
            }
        </div>
        <div className='banner__info'>
        <h4>
            Enjoy Your Vaction With SP Hotels
        </h4>
        <h1 style={{marginTop: "0px" , color: "#EB8A04"}}> 
            Let us plan you a perfect International Holidays
        </h1>
        <Button onClick={handle}> EXplore Now </Button>
        </div>
    </div>
    <div className='booking__div'>
        <div className='booking'>
            <div style={{display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
                <div className='banner__main__div'>
                    <div className='booking__header'>
                        <img className='booking__vector' alt='' src={vector} />
                        <h4>Arrival Date</h4>
                        <img className='booking_vector2' src='https://img.icons8.com/ios-filled/24/000000/sort-down.png' alt='' onClick={() => setShowsearch(true)}/>
                    </div>
                    <div className='booking__bof'>
                        <h2>{`${format (date[0].startDate, "dd MMM")}`}</h2>
                        <h4>{`${format (date[0].startDate, "EEE")}`}</h4>
                    </div>
                </div>

                <div className='banner__main__div'>
                    <div className='booking__header'>
                        <img className='booking__vector' alt='' src={vector} />
                        <h4>Check Out</h4>
                        <img className='booking_vector2' src='https://img.icons8.com/ios-filled/24/000000/sort-down.png' alt='' onClick={() => setShowsearch(false)}/>
                    </div>
                    <div className='booking__bof'>
                    <h2>{`${format (date[0].endDate, "dd MMM")}`}</h2>
                    <h4>{`${format (date[0].endDate, "EEE")}`}</h4>
                    </div>
                </div>

                <div className='banner__main__div'>
                    <div className='booking__header'>
                        <img className='booking__vector1' alt='' src={adult} />
                        <h4>Adults</h4>
                    </div>
                    <div className='booking__bo'>
                        <h2>{`${options.adult}`}</h2>
                        <div className='booking__no'>
                            <div  onClick={() => handleOption ("adult","i")}>
                            <img src='https://img.icons8.com/material/24/000000/sort-up--v2.png' alt='' style={{height:"28px"}} />
                            </div>
                        </div>
                        <div>
                            <button style={{border:"none", background:"transparent"}} disabled={options.adult <= 1} onClick={() => handleOption ("adult","d")}>
                            <img src='https://img.icons8.com/ios-filled/24/000000/sort-down.png' alt='' style={{height:"24px"}} />
                            </button>
                        </div>  
                    </div>
                </div>

                <div className='banner__main__div'>
                    <div className='booking__header'>
                        <img className='booking__vector1' alt='' src={adult} />
                        <h4>Children</h4>
                    </div>
                    <div className='booking__bo'>
                        <h2>{`${options.Children}`}</h2>
                        <div className='booking__no'>
                            <div onClick={() => handleOption ("children","i")}>
                            <img src='https://img.icons8.com/material/24/000000/sort-up--v2.png' alt='' style={{height:"28px"}} />
                            </div>
                        </div>
                        <div>
                            <button style={{border:"none", background:"transparent"}} disabled={options.Children <= 0} onClick={() => handleOption ("children","d")}>
                            <img src='https://img.icons8.com/ios-filled/24/000000/sort-down.png' alt='' style={{height:"24px"}} />
                            </button>
                        </div>  
                    </div>
                </div>
                

                <div className="banner__main__div" style={{paddingTop: "0px"}}>
                    <h4 className='fadded__text'>
                        Hope You Have A Nice Experience...
                    </h4>
                    <div className='booking__button'>
                        <button onClick={handle}>Check Availability</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner