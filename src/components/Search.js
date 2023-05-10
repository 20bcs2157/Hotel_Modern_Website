import React from 'react'
import './Searchpage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

const rooms = [
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.03KbMe0H1U0KfQOGO-I49wHaE8&pid=Api&P=0&w=316&h=210",
    location: "mumbai",
    title: "two rooms",
    description: "nice place",
    star : "4",
    price : "23",
    total: "233",
  },
  {
    img: "https://www.castleknockhotel.com/cmsGallery/imagerow/11792/resized/1680x1050/deluxe_executive_1.jpg",
    location:"Delhi",
    title: "two rooms",
    description : "nice_place",
    star: "4",
    price: "23",
    total: "233",
  },
  {
    img: "https://www.castleknockhotel.com/cmsGallery/imagerow/11792/resized/1680x1050/deluxe_executive_1.jpg",
    location:"Delhi",
    title: "two rooms",
    description : "nice_place",
    star: "4",
    price: "23",
    total: "233",
  },
]

const Search = () => {
  return (
    <div className='searchpage'>
      <div className='searchpage__data'>
        <Button variend = "outlined">
          USER NAME
        </Button>
        <Button variend =" outlined">
          USER MAIL
        </Button>
      </div>
      {rooms.map((data,index) => (
        <SearchResult 
        key = {index}
        img = {data.img}
        price = {data.price}
        location={data.location}
        title={data.title}
        description={data.description}
        star = {data.star}
        total={data.total}/>
      ))}
    </div>
  )
}

export default Search