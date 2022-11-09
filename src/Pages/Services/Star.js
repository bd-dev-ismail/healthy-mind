import React from 'react';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
 export const Star = ({stars}) => {
    const ratingStar = Array.from({length:5}, (ele, index)=>{
        let number = index + 0.5;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar />
            ) : stars >= number ? (
              <FaStarHalfAlt />
            ) : 
              <AiOutlineStar />
            }
          </span>
        );
    })
    return (
        <div className='flex text-warning'>
            {ratingStar}
           
        </div>
    );
};

export default Star;