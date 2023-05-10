import React from 'react'
import "./SearchResult.css";
import StarIcon from "@material-ui/icons/Star"

const SearchResult = ({img,location,title,description,star,price,total}) => {
  return (
    <div className='searchresult'>
        <img src={img} alt='' />
        <div className='searchresult__info'>
            <div className='searchtresult__infotop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>----</p>
                <p>{description}</p>
            </div>
            <div className='searchresult__infobutton'>
                <div className='searchresult__stars'>
                    <StarIcon className="searchresult__star" />
                    <p>
                        <strong>
                            {star}
                        </strong>
                    </p>
                </div>
                <div className='searchresults__price'>
                    <h2>${price}/night</h2>
                    <p>${total}</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult