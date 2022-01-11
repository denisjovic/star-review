import React from 'react';
import {FaStar} from "react-icons/fa";

const StarComponent = ({selected = false, onSelect}) => {
   return  <FaStar onClick={onSelect} color={selected ? '#efe207' : 'gray'}/>
}
export default StarComponent